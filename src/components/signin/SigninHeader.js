import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'
import ReturnIcon from '../common/ReturnIcon'

class SigninHeader extends Component{
    render(){
        return (
            <div>
                 <CommonHeader 
                    tit="登录"
                    left={
                        <ReturnIcon />
                    }
                 />
            </div>
        )
    }
}

export default SigninHeader