import Fetch from '../utils/fetch'
import * as actionTypes from './actionTypes'
import Service from '../utils/service'

//点击头部导航菜单切换主题类型
export function switchTopics(topics){
    return {
        type: actionTypes.SWITCH_TOPICS,
        topics
    }
}

// 获取主题请求
export function req_getTopics(sort,limit, page, isLoadingMore){
    return function(dispatch){
        const url = Service.getReqUrl().getTopics;
        return Fetch.getRequest(url, {tab: sort, limit: limit, page: page}, (res) => {
            if(isLoadingMore === true){
                dispatch(loadMore(res.data)) 
            }else{
                dispatch(switchTopics(res.data))
            }
        },(error) =>{
            console.log(error)
        });   
    }
}

//更新主题
export function updateTopic(prop){
    return {
        type: actionTypes.UPDATE_TOPIC,
        prop
    }
}

//切换加载更多的状态属性
export function switchLoadMoreState(prop){
    return {
        type: actionTypes.SWITCH_LOAD_MORE_STATE,
        prop
    }
}

//加载更多
export function loadMore(topics){
    return {
        type: actionTypes.LOAD_MORE,
        topics
    }
}




