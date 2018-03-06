import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'


class ReturnIcon extends Component{
    returnLastPage(){
        this.props.history.goBack()
    }
    render(){
        return (
            <i  onClick={(e) => this.returnLastPage()}
                className="iconfont">&#xe60f;</i>
        )
    }
}

export default withRouter(ReturnIcon)