import React, {Component} from 'react'
import Service from '../../utils/service'

class UserInfoCenter extends Component{
    render(){
        const {userInfo} = this.props;
        return (
            <div className="user-info-center">
                <img className="user-avatar" src={userInfo.avatar_url} /><br/>
                <span className="user-login-name">{userInfo.loginname}</span><br/>
                <div>
                    <span>积分：{userInfo.score}</span>
                    <span className="user-reg-date">注册于： {Service.formatDate(userInfo.create_at)}</span>
                </div>
             </div>
        )
    }
}

export default UserInfoCenter