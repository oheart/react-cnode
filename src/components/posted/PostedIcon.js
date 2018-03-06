import React, {Component} from 'react'
import {connect} from 'react-redux'
import Fetch from '../../utils/fetch'
import Service from '../../utils/service'
import * as actions from '../../actions'


class PostedIcon extends Component{
    req_createTopic(){
        const {updateTopic} = this.props;
        const User = Service.localItem('User');
        const accesstoken = JSON.parse(User).accesstoken;
        const params = updateTopic;
        params.accesstoken = accesstoken;

        const url = Service.getReqUrl().createTopics;
        Fetch.postRequest(url, params, (res) => {
           if(res.success){
               alert('发表成功');
           }else{
               alert(res.error_msg)
           }
        },(error) => {
            alert('发表失败')
            console.log(error)
        })
    }
    createTopic(){
        this.req_createTopic();
    }
    render(){
        const {updateTopic} = this.props;

        return (
            <span 
                className="post-icon-wrapper"
                onClick={(e) => this.createTopic()}
                >
                    <i className="iconfont posted-icon">&#xe60a;</i>
            </span>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        updateTopic: state.updateTopic
    }
}

export default connect(mapStateToProps)(PostedIcon)