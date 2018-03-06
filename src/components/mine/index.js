import React, {Component} from 'react'


import MineHeader from './MineHeader'
import MineMain from './MineMain'
import CommonFooter from '../common/CommonFooter'
import Service from '../../utils/service'
import {withRouter} from 'react-router-dom'



class Mine extends Component{
    render(){
        const User = Service.localItem('User');
       //登录用户名
       const loginUname = JSON.parse(User).loginname;
       //当前用户名
       const curentUser = this.props.match.params.loginname;

        if(loginUname == curentUser){
            return (
                <div  className="cnode-content-wrapper">
                    <MineHeader />
                    <MineMain />
                    <CommonFooter />
                </div>
            )
        }else{
            return (
                <div  className="cnode-content-wrapper">
                    <MineHeader />
                    <MineMain />
                </div>
            )
        }
    }
}

export default withRouter(Mine)