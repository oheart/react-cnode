import React, {Component} from 'react'
import ReplyList from './ReplyList'


class TopicReplyDetail extends Component{
    render(){
        const {detailData, req_getTopicDetails} = this.props;
        return (
            <div className="topic-reply-detail-content">
                <div className="reply-num-box">
                    共{detailData.reply_count}条回复
                </div>
                <ReplyList 
                     detailData={detailData}
                     req_getTopicDetails={req_getTopicDetails}
                    />
            </div>
        )
    }
}

export default TopicReplyDetail