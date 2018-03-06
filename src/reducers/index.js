import {combineReducers} from 'redux'
import topicsList from './topicsList'
import updateTopic from './updateTopic'
import changeLoadMoreState from './loadMore'

const reducers = combineReducers({
    topicsList,
    updateTopic,
    changeLoadMoreState
})

export default reducers