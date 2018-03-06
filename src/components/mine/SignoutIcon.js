import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Signout from '../signout'

class SignoutIcon extends Component{
    render(){
        return (
            <span>
                <Link to='/signout'
                    replace
                    className='white-color'
                    >
                    <i className="iconfont">&#xe67d;</i>
                </Link>
            </span>
        )
    }
}

export default SignoutIcon