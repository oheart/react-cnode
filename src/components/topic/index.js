import React, {Component} from 'react'
import TopicHeader from './TopicHeader'
import TopicMain from './TopicMain'

class Topic extends Component{
    render(){
        return (
            <div  className="cnode-content-wrapper">
                 <TopicHeader />
                 <TopicMain />   
            </div>
        )
    }
}

export default Topic