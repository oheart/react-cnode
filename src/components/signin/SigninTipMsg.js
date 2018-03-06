import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SigninTipMsg extends Component{
    render(){
        return (
            <main className="cnode-main-wrapper">
                 <div className="signin-msg-box">
                    你还未登录，请先
                    <Link to="/signin" className="signin-tip-link">
                        登录
                    </Link>
                </div>
            </main>
        )
    }
}

export default SigninTipMsg