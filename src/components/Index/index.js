import React, {Component} from 'react'

import IndexHeader from './IndexHeader'
import TopicsList from './TopicsList'
import CommonFooter from '../common/CommonFooter'



class Index extends Component{
    render(){
        return (
            <div  className="cnode-content-wrapper">
                <IndexHeader />
                <TopicsList />
                <CommonFooter />
            </div>
        )
    }
}

export default Index


