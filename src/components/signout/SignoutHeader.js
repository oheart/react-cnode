import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'
import ReturnIcon from '../common/ReturnIcon'

class SignoutHeader extends Component{
    render(){
        return (
            <div>
                 <CommonHeader 
                    tit="退出"
                    left={
                        <ReturnIcon />
                    }
                 />
            </div>
        )
    }
}

export default SignoutHeader