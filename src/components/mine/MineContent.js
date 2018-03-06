import React, {Component} from 'react'
import Service from '../../utils/service'
import Fetch from '../../utils/fetch'
import UserInfoCenter from './UserInfoCenter'
import UserTopicReply from './UserTopicReply'
import {withRouter} from 'react-router-dom'

class MineContent extends Component{
    constructor(){
        super();
        this.state = {
            userInfo: []
        }
    }
    req_getUserInfo(loginname){
        const url = Service.getReqUrl().getUserDetail;
        Fetch.getRequest(url + loginname, null ,(res) => {
            this.setState({
                userInfo: res.data
            })
        }, (error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        //从路由获取对应用户的登录名
        const loginname = this.props.match.params.loginname;
        this.req_getUserInfo(loginname);
    }
    render(){
        const userInfo = this.state.userInfo;
        //userInfo未获取数据之前阻止组件渲染
        if(userInfo.length == 0){
            return null;
        }
        return (
            <main className="cnode-main-wrapper">
                <div className="user-info-wrapper">
                    <UserInfoCenter 
                            userInfo = {userInfo}
                        />
                    <UserTopicReply 
                            userInfo = {userInfo}
                        />
                </div>
            </main>
        )
    }
}

export default withRouter(MineContent)