import React, {Component} from 'react'
import Service from '../../utils/service'


class SignoutMain extends Component{
    signout(){
         //清空localStorage存储的所有数据
         Service.clearAllLocal();
         //跳转主页
         location.replace("#/");
    }
    render(){
        return (
            <main className="cnode-main-wrapper">
                <div className="signout-content-box">
                    <button className="signout"
                        onClick={(e) => this.signout()}
                        >
                        确认退出登录？
                    </button>
                </div>
            </main>
        )
    }
}

export default SignoutMain