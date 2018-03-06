import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'
import SignoutIcon from './SignoutIcon'
import Service from '../../utils/service'
import ReturnIcon from '../common/ReturnIcon'
import {withRouter} from 'react-router-dom'


class MsgHeader extends Component{
    render(){
        const User = Service.localItem('User');
        //登录用户名
        const loginUname = JSON.parse(User).loginname;
        //当前用户名
        const curentUser = this.props.match.params.loginname;

        let headerContent = null;
        if(loginUname == curentUser){
            headerContent = 
                <CommonHeader 
                        tit="个人中心"
                        right={
                            <SignoutIcon />
                        }
                        />
        }else{
            headerContent = 
                <CommonHeader 
                    tit="个人中心"
                    left={
                        <ReturnIcon />
                    }
                />
        }

        return (
            <div>
                {headerContent}
            </div>
        )
    }
}

export default withRouter(MsgHeader)