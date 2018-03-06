import React, {Component} from 'react'


import SigninHeader from './SigninHeader'
import SigninMain from './SigninMain'
import CommonFooter from '../common/CommonFooter'
import Service from '../../utils/service'


class Signin extends Component{
    render(){
        const User = Service.localItem('User');
        if(User){
            return (
                <div  className="cnode-content-wrapper">
                    <SigninHeader />
                    <SigninMain />
                    <CommonFooter />
                </div>
            )
        }else{
            return (
                <div  className="cnode-content-wrapper">
                    <SigninHeader />
                    <SigninMain />
                </div>
            )
        }
    }
}

export default Signin