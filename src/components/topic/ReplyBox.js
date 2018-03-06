import React, {Component} from 'react'
import Fetch from '../../utils/fetch'
import Service from '../../utils/service'
import SigninTipMsg from '../signin/SigninTipMsg'


class ReplyBox extends Component{
    constructor(){
        super();
        this.state = {
            replyContent: ''
        }
    }
    handleChangeTextarea(e){
        const value = e.target.value;
        this.setState({
            replyContent: value
        })
    }
    req_submitReply(){
        const {detailData, req_getTopicDetails, replyId, currentUname} = this.props;
        const topicId = detailData.id;

        const User = Service.localItem('User');
        const accesstoken = JSON.parse(User).accesstoken;
        const content = this.state.replyContent;
        if(!content){
            alert('回复内容不可为空');
            return;
        }
        let params = {
            accesstoken: accesstoken,
            content: content
        };

        //如果回复id存在,传递replyId，评论内容加上@用户名
        if(replyId){
            params.content = `[@${currentUname}](#/mine/${currentUname}) ${content}`
            params.reply_id = replyId
        }
        
        const url  = Service.getReqUrl().createComment(topicId);
        Fetch.postRequest(url, params , (res) => {
            if(res.success){
                alert('回复成功')
                this.setState({
                    replyContent: ''
                })
                req_getTopicDetails();
            }else{
                alert(res.error_msg)
            }
            
        }, (error) => {
            console.log(error)
            alert('回复失败')
        })
    }
    submitReply(){
        this.req_submitReply();
    }
    render(){
        const {display, placeholder} = this.props;
        const User  = Service.localItem('User');
        if(!User){
            return (
                <div style={{display: (display ? 'block' : 'none')}}>
                     <SigninTipMsg />
                </div>
            )
        }
        return (
            <div className="detail-reply-box" style={{display: (display ? 'block' : 'none')}}>
               <textarea    className="reply-textarea"
                    placeholder={placeholder}
                    value={this.state.replyContent}
                    onChange={(e) => this.handleChangeTextarea(e)}
                    />
               <button className="reply-btn"
                    onClick={(e) => this.submitReply()}
                    >回复</button>
            </div>
        )
    }
}

export default ReplyBox