import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import queryString from 'query-string'
import {connect} from 'react-redux'
import * as actions from '../../actions'



class HeaderMenuItem extends Component{
    componentWillReceiveProps(nextProps) {
        const {dispatch_getTopics, location, menu} = nextProps;
        const queryTab = queryString.parse(location.search).tab || '';

        const menuTab = menu.tab;
        if(menuTab === queryTab){
            dispatch_getTopics(queryTab, 10, 1, false)
        }
    }
    initPage(){
        const {dispatch_switch_loadmore_state} = this.props;
        //初始化page为1
        dispatch_switch_loadmore_state({
            page: 1
        })
    }
    
    render(){
        const {menu, dispatch_getTopics, location} = this.props;
        const topicName = menu.name;
        const path = menu.path;
        const queryTab = queryString.parse(location.search).tab || '';
      
        return (
            <li
                className="cnode-nav-item"
                onClick={(e) => this.initPage()}
                >
                 <Link 
                    to={path} replace
                    className={queryTab === menu.tab ? 'sel-nav' : ''}>
                    {topicName}
                </Link>
            </li>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_getTopics: (sort, limit, page) => dispatch(actions.req_getTopics(sort, limit, page)),
        dispatch_switch_loadmore_state: (prop) => dispatch(actions.switchLoadMoreState(prop))
    }
}


export default withRouter(connect(null, mapDispatchToProps)(HeaderMenuItem))


