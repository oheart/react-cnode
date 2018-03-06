import React, {Component} from 'react'

class IconTmpl extends Component{
    render(){
        const {topicName} = this.props;
        switch(topicName){
            case '首页':
                return <i className="iconfont bottom-footer-icon">&#xe619;</i>;
            case '发表':
                return <i className="iconfont bottom-footer-icon">&#xe60a;</i>;
            case '消息':
                return <i className="iconfont bottom-footer-icon">&#xe616;</i>;
            case '我的':
                return <i className="iconfont bottom-footer-icon">&#xe636;</i>; 
        }
    }
}

class FooterIcon extends Component{
    render(){
        const {topicName} = this.props;
        return (
            <IconTmpl 
                topicName = {topicName}
                />
        )
    }
}

export default FooterIcon