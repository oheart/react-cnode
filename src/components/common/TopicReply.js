import React, {Component} from 'react'

class TopicReply extends Component{
    render(){
        const {data} = this.props;
        return (
            <ul className="topic-reply-list">
                {
                    data.map(item =>
                        <li 
                            key={item.id}
                            className="trlist-item">
                            <span className="tr-reply-tit">{item.title}</span>
                            <span  className="tr-res-date">1小时前</span>
                        </li>
                    )
                }
           </ul>
        )
    }
}

export default TopicReply




