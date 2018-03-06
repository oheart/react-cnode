import * as actionTypes from '../actions/actionTypes'

const intialTopic = {
    title: '',
    tab:'',
    content:''
}

function updateTopic(topic = intialTopic, action){
    switch(action.type){
        case actionTypes.UPDATE_TOPIC:
            return {...topic, ...action.prop}
        default:
            return topic
    }
}

export default updateTopic