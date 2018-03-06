import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import FooterIcon from './FooterIcon'
import Service from '../../utils/service'
import Fetch from '../../utils/fetch'

class FooterMenuItem extends Component{
    constructor(){
        super();
        this.state = {
            msgCount: 0
        }
    }
    req_geMesgCount(){
        const User = Service.localItem('User');
        if(User){
            const accesstoken = JSON.parse(User).accesstoken || '';
            const url = Service.getReqUrl().getUnreadCount;
            Fetch.getRequest(url ,{accesstoken: accesstoken},(res) => {
                    if(this._isMounted){
                        this.setState({
                            msgCount: res.data
                        })
                    }
            },(error) => {
                console.log(error)
            })
        }
    }
    componentDidMount() {
        // 使用一个标志位_isMounted，在componentDidMount里设置为true,在componentWillUnmount里设置为false，仅当_isMounted为true即还未被卸载，才执行setState()
        this._isMounted = true;
        this.req_geMesgCount();
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    shouldComponentUpdate(nextProps,nextState){
        return (this.props.menu.name !== nextProps.menu.name) || (this.state.msgCount !== nextState.msgCount);  //防止组件不必要的更新
    }

     componentDidUpdate(prevProps, prevState) {
         this.req_geMesgCount();
     }
     
    render(){
        const {menu} = this.props;
        const topicName = menu.name;
        const User = Service.localItem('User');

        //未登录时点击我的跳转到登录页面，登录之后跳转到我的页面
        if(menu.name == '我的' && !User){
            menu.path = '/signin'
        }else if(menu.name == '我的' && User){
            const loginname = JSON.parse(User).loginname;
            menu.path = '/mine/' + loginname
        }

        //未读消息
        let unreadHint = null;
        const msgCount = this.state.msgCount;
        if(topicName == '消息' && msgCount > 0){
            unreadHint = <span className="unread-msg-hint">{msgCount}</span>;
        }

        return (
                <li  className='cnode-footer-options'
                >
                    <NavLink exact to={`${menu.path}`} replace
                             activeClassName='sel-footer-options'>
                        <FooterIcon 
                            topicName={topicName}
                            />
                        {unreadHint}
                        <br/>
                        <span>{topicName}</span>
                    </NavLink> 
                </li>   
        )
    }
}

export default FooterMenuItem