import React, {Component} from 'react'


import PostedHeader from './PostedHeader'
import PostedMain from './PostedMain'
import CommonFooter from '../common/CommonFooter'


class Posted extends Component{
    render(){
        return (
            <div  className="cnode-content-wrapper">
                <PostedHeader />
                <PostedMain />
                <CommonFooter />
            </div>
        )
    }
}

export default Posted