import React, {Component} from 'react'
import {connect} from 'react-redux'

import TopicItem from './TopicItem'
import * as actions from '../../actions'
import LoadMore from './LoadMore'

import * as constants from '../../constants'
import queryString from 'query-string'
import {withRouter} from 'react-router-dom'
import Loading from '../common/Loading'



class TopicsList extends Component{
    componentDidMount(){
        const {dispatch_getTopics, location, loadMore_redux} = this.props;
        const queryTab = queryString.parse(location.search).tab || '';
  
        const isLoadingMore = loadMore_redux.isLoadingMore;
        dispatch_getTopics(queryTab, 10, 1, isLoadingMore)
    }
    
    //加载更多数据
    LoadMoreFn(){
        const {loadMore_redux, dispatch_switch_loadmore_state} = this.props;
        //记录状态-变成加载更多
        dispatch_switch_loadmore_state({
            isLoadingMore: true   
        })        
    }
    componentWillReceiveProps(nextProps){
        const {dispatch_getTopics, location, loadMore_redux, dispatch_switch_loadmore_state} = nextProps;

        if(loadMore_redux.isLoadingMore === true){
            const {dispatch_getTopics, location} = this.props;
            const queryTab = queryString.parse(location.search).tab || '';
            const page = loadMore_redux.page + 1;  // 下一页页码
    
            //从nextProps获取isLoadingMore状态
            const isLoadingMore = nextProps.loadMore_redux.isLoadingMore;

            dispatch_getTopics(queryTab, 10, page, isLoadingMore)

            //增加page的计数
            dispatch_switch_loadmore_state({
                page: page + 1,
                isLoadingMore: false
            }) 
        }
    }
    
    render(){
        const {topics_redux, loadMore_redux} = this.props;
        return (
            <main className="cnode-main-wrapper">
               <div className="cnode-topics-list">
                    {
                        topics_redux.map((topicItem) => 
                            <TopicItem 
                                key={topicItem.id}
                                topicItem={topicItem}
                            />
                        )
                    }
                    {
                         topics_redux.length > 0
                         ? ''
                         : <Loading />
                    }
                    {
                        // 加载更多
                        loadMore_redux.hasMore && topics_redux.length > 0
                        ? <LoadMore 
                                isLoadingMore={loadMore_redux.isLoadingMore}
                                LoadMoreFn={(e) => this.LoadMoreFn()}
                            />
                        : ''
                    }
                    
               </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topics_redux: state.topicsList,
        loadMore_redux: state.changeLoadMoreState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_getTopics: (sort, limit, page, isLoadingMore) => dispatch(actions.req_getTopics(sort, limit, page, isLoadingMore)),
        dispatch_switch_loadmore_state: (prop) => dispatch(actions.switchLoadMoreState(prop))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicsList))