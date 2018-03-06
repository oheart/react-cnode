import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'


class MsgHeader extends Component{
    render(){
        return (
            <div>
              <CommonHeader 
                    tit="消息" 
                    />
            </div>
        )
    }
}

export default MsgHeader