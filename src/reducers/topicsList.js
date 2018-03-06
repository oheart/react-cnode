import * as actionTypes from '../actions/actionTypes'

function topicsList(topics = [], action){
    switch(action.type){
        case actionTypes.SWITCH_TOPICS:
            return action.topics
        case actionTypes.LOAD_MORE:
            return [...topics, ...action.topics] 
        default:
            return topics
    }
}

export default topicsList