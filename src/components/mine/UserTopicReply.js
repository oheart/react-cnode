import React,{Component} from 'react'
import TopicReply from '../common/TopicReply'
import {NavLink, Switch, Route} from 'react-router-dom'
import * as constants from '../../constants'
import Service from '../../utils/service'

class UserTopicReply extends Component{
    constructor(){
        super();
        const activeUserTabIndex = Service.localItem('activeUserTabIndex') || 0;
        //从localstorage读取activeIndex
        this.state = {
            activeIndex: activeUserTabIndex
        }
    }
    toggleTopicReplyTab(currentIndex){
       this.setState({
            activeIndex: currentIndex
       })
       //把激活tab的index存储，实现再刷新页面的时候持久化
       Service.localItem('activeUserTabIndex', currentIndex);
    }

    render(){
        const {userInfo} = this.props;
        const recent_topics = userInfo.recent_topics;
        const recent_replies = userInfo.recent_replies;
        const userTopicReplyTab = constants.userTopicReplyTab;
        const activeIndex = this.state.activeIndex;

        let topicReplyPart = null;
        switch(parseInt(activeIndex)){
            case 0:
                topicReplyPart = <TopicReply
                    data={recent_topics}
                />
                break;
            case 1:
                topicReplyPart = <TopicReply
                    data={recent_replies}
                />
                break;
        }

        return (
            <div className="user-topic-reply">
                <ul className="topic-reply-tab">
                    {
                        userTopicReplyTab.map((item,index) => {
                            const tabStyle  =  (index === parseInt(activeIndex)) ? 'uinfo-tab-option sel-uinfo-tab' : 'uinfo-tab-option';
                            return (
                                <li 
                                    key={index}
                                    onClick={(e) => this.toggleTopicReplyTab(index)}
                                    className={tabStyle}
                                >
                                    {item.name}
                                </li>

                            )
                        })
                    }
                </ul>
                {topicReplyPart}    
            </div>
        )
    }
}

export default UserTopicReply