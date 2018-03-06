import React, {Component} from 'react'


import MsgHeader from './MsgHeader'
import MsgMain from './MsgMain'
import CommonFooter from '../common/CommonFooter'


class Msg extends Component{
    render(){
        return (
            <div  className="cnode-content-wrapper">
                <MsgHeader />
                <MsgMain />
                <CommonFooter />
            </div>
        )
    }
}

export default Msg