import * as actionTypes from '../actions/actionTypes'

const initalLoadMoreState = {
    hasMore: true, // 记录当前状态下，还有没有更多的数据可供加载
    isLoadingMore: false, // 记录当前状态下，是“加载中..”还是“点击加载更多”
    page: 2  //下一页的页码
}

function changeLoadMoreState(loadMoreState = initalLoadMoreState, action){
    switch(action.type){
        case actionTypes.SWITCH_LOAD_MORE_STATE:
            return {...loadMoreState, ...action.prop}
        default:
            return loadMoreState
    }
}

export default changeLoadMoreState
