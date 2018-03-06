import React, {Component} from 'react'
import ReplyBox from './ReplyBox'
import Fetch from '../../utils/fetch'
import Service from '../../utils/service'
import {withRouter} from 'react-router-dom' 

class ReplyList extends Component{
    constructor(){
        super();
        this.state = {
            replies: []
        }
    }
    req_clickLike(replyId, currentUname){
        const {history, req_getTopicDetails} = this.props;
  
        const User = Service.localItem('User');
        if(!User){
            history.push({
                pathname: '/signin'  //如果不是已登录用户跳转到登录页
            })
            return;
        }

        //已登录的情况下获取登录的accesstoken和用户名
        const accesstoken = JSON.parse(User).accesstoken;
        const loginname = JSON.parse(User).loginname;
        
        if(currentUname === loginname){
            alert('你不能给自己点赞');
            return;
        }
        const url = Service.getReqUrl().clickLike(replyId);
        Fetch.postRequest(url, {accesstoken}, (res) => {
            if(res.success){
                //点赞成功后调用父级方法更新主题详情
                req_getTopicDetails();
            }else{
                alert(res.error_msg)
            }
        }, (error) => {
            console.log(error)
        })
    }
    clickLike(replyId){
        this.req_clickLike(replyId)
    }
    ifEverClickLike(ups){
        const User = Service.localItem('User');
        if(User){
            const uId = JSON.parse(User).id;
            //判断ups数组里是否包含登录用户id，如果包含则代表该用户已经点过赞，颜色高亮显示
            if(ups.indexOf(uId) !== -1){
                return 'ever-like-style';
            }else{
                return '';
            }
        }
        
    }
    clickReply(item){
        const {history} = this.props;
        const User = Service.localItem('User');
        if(!User){
            history.push({
                pathname: '/signin'  //如果不是已登录用户跳转到登录页
            })
            return;
        }

        const replies = this.state.replies;
        const handleReplies =  
            replies.map((reply, index) => 
                (reply.id === item.id)
                    ?  {...reply, replyDisplayFlag: !item.replyDisplayFlag}
                    :  reply
            );
        console.log('handleReplies', handleReplies)
        this.setState({
            replies: handleReplies
        })
    }
    
    componentDidMount() {
        const {detailData, req_getTopicDetails} = this.props;
        const {replies} = detailData;

        //给每个回复添加一个控制回复框是否显示的属性
        replies.map(item => item.replyDisplayFlag = false)
       
        this.setState({
            replies: replies
        })
    }
    
    componentWillReceiveProps(nextProps, nextState) {
        const {detailData, req_getTopicDetails} = nextProps;
        const {replies} = detailData;

        this.setState({
            replies: replies
        })
    }
    
    render(){
        const {detailData, req_getTopicDetails} = this.props;
        const {replies} = detailData;

        return (
            <div className="reply-list-box">
                {
                    this.state.replies.map((item, index) => {
                        const {author, id, ups} = item;
                        const currentUname = author.loginname;

                        return (
                            <div className="reply-list-part"
                                    key={index}>
                                <div className="topic-list-uinfo">
                                    <div className="uinfo-details-area">
                                        <img src={author.avatar_url} 
                                                className="topic-user-avatar"
                                            />
                                        <div>
                                            <p>
                                                    <span className="topic-detail-user">{author.loginname}</span>
                                                    <span>10天前</span>
                                            </p>
                                            <p>
                                                    <span dangerouslySetInnerHTML={{__html: item.content}}></span>
                                            </p>
                                        </div>
                                    </div>
                                    <span className="user-landlord-txt">
                                        #楼主
                                    </span>
                                </div>
                                <div className="like-reply-content">
                                    <span className={this.ifEverClickLike(ups)}>
                                        <i className="iconfont like-topic-icon" onClick={(e) => this.clickLike(id, currentUname)}>&#xe640;</i>
                                        <span className="like-num">{ups.length ? ups.length : ''}</span>
                                    </span>              
                                    <i className="iconfont reply-topic-icon" 
                                        onClick={(e) => this.clickReply(item)}>&#xe60e;</i>
                                </div>
                                <ReplyBox 
                                    display={item.replyDisplayFlag}
                                    detailData = {detailData}
                                    replyId={id}
                                    placeholder={`@${currentUname}`} 
                                    currentUname={currentUname}
                                    req_getTopicDetails = {req_getTopicDetails}
                                />
                            </div>
                        )
                    })
                }
                <ReplyBox 
                     display={true}
                     detailData = {detailData}
                     placeholder="回复支持Markdown语法,请注意标记代码"
                     req_getTopicDetails = {req_getTopicDetails}
                    />
            </div>
        )
    }
}

export default withRouter(ReplyList)