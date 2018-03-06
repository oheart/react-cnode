import React, {Component} from 'react'
import Fetch from '../../utils/fetch'
import Service from '../../utils/service'
import {withRouter} from 'react-router-dom'



class SigninMain extends Component{
    constructor(){
        super();
        this.state = {
            tokenVal: '',
            btnVal:'登录'
        }
    }
    changeTokenVal(e){
        const value = e.target.value;
        this.setState({
            tokenVal: value
        })
    }
    req_login(tokenVal){
        const url = Service.getReqUrl().signin;
        Fetch.postRequest(url ,{accesstoken:tokenVal},(res) => {
            if(res.success){
                alert('登录成功')
                res.accesstoken = tokenVal;
                //把用户信息存储到localStorage
                Service.localItem('User', JSON.stringify(res))
                //跳转到我的页面
                this.props.history.push({
                    pathname: '/mine/' + res.loginname
                })
            }else{
                alert('登录失败');
                this.setState({ btnVal: '登录' });
            }
           
        }, (error) => {
            console.log(error)
            alert('登录失败')
            this.setState({ btnVal: '登录' });
        })
    }
    signIn(){
        const tokenVal = this.state.tokenVal;
        if(!tokenVal){
            alert('token不能为空！')
            return;
        }
        this.setState({
            btnVal: '登录中....'
        })
        this.req_login(tokenVal);
    }
    render(){
        return (
            <main className="cnode-main-wrapper">
                <div className="signin-content-box">
                    <input type="text" 
                            placeholder="Access Token"
                            className="access-token-input"
                            value={this.state.tokenVal}
                            onChange={(e) => this.changeTokenVal(e)}
                        /><br />
                    <button className="signin-btn"
                            onClick={(e) => this.signIn()}
                        >
                        {this.state.btnVal}
                    </button>
                </div>
            </main>
        )
    }
}

export default withRouter(SigninMain)