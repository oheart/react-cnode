import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Service from '../../utils/service'

class TopicDetail extends Component{
    render(){
        const detailData = this.props.detailData;
        const {author} = detailData;
        return (
            <div className="topic-detail-content">
                <div className="topic-detail-uinfo">
                     <div className="uinfo-details-inner">
                        <img src={author.avatar_url} 
                                className="topic-user-avatar"
                            />
                           <div>
                               <p>
                                    <span className="topic-detail-user">{author.loginname}</span>
                                    <span>{Service.formatDate(detailData.create_at)}</span>
                               </p>
                               <p>
                                    <span className="topic-read-num">阅读：{detailData.visit_count}</span>
                                    <span>回复：{detailData.reply_count}</span>
                               </p>
                           </div>
                     </div>
                     <span className="user-landlord-txt">
                         #楼主
                     </span>
                </div>
                <div className="topic-article-info">
                    <h2 className="topic-articel-title">{detailData.title}</h2>
                    <div className="topic-articel-content"
                        dangerouslySetInnerHTML={{__html:detailData.content}}></div>
                </div>
            </div>
        )
    }
}

export default withRouter(TopicDetail)