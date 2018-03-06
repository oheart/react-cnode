import React, {Component} from 'react'
import Fetch from '../../utils/fetch'
import Service from '../../utils/service'
import {Link} from 'react-router-dom'

class MsgContent extends Component{
    constructor(){
        super();
        this.state = {
            msgList:[]
        }
    }
    req_getMessage(accesstoken){
        const url = Service.getReqUrl().getMsg;
        Fetch.getRequest(url,{accesstoken: accesstoken},(res) => {
            const has_read_messages = res.data.has_read_messages;
            const hasnot_read_messages = res.data.hasnot_read_messages;
            const total_messages = hasnot_read_messages.concat(has_read_messages);
            this.setState({
                msgList: total_messages
            })

        },(error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        const User = Service.localItem('User');
        const accesstoken = JSON.parse(User).accesstoken;
        this.req_getMessage(accesstoken);
    }
    render(){
        const msgList = this.state.msgList;
        return (
            <main className="cnode-main-wrapper">
                 <div className="my-msg-list">
                     {
                         msgList.map((item, index) => {
                                const {author,reply, topic, has_read, type} = item;
                                let content = null;
                                let redDot = null;
                                if(!has_read){
                                    redDot =  <span className="unread-red-dot">●</span>;
                                }
                                if(type == 'at'){
                                    content = 
                                        <p>
                                                {redDot}
                                                <span className="msg-reply-txt">在话题</span>
                                                <span className="msg-reply-content">{topic.title}</span>
                                                <span>中@了你</span>
                                        </p>
                                               
                                }else{
                                    content =   
                                        <p>
                                                {redDot}
                                                <span className="msg-reply-txt">回复了你的话题</span>
                                                <span>
                                                    <Link  className="msg-reply-content" to={`/topic/${topic.id}`}>{topic.title}</Link>
                                                </span>
                                        </p>
                                }
                                return (
                                    <div 
                                        key={index}
                                        className="my-msg-item">
                                            <Link to={`/mine/${author.loginname}`}>
                                                <img className="msg-user-avatar"
                                                    src={author.avatar_url} />
                                            </Link>
                                            <div className="my-msg-details">
                                                <p>
                                                    <span className="msg-create-user">{author.loginname}</span>
                                                    <span className="msg-create-time">{Service.formatDate(reply.create_at)}</span>
                                                </p>
                                                {content}
                                            </div>
                                    </div>
                                )
                            })
                     }
                     
                </div>
            </main>
        )
    }
}

export default MsgContent