import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'

import '../static/style/reset.css'
import '../static/style/style.less'
import '../static/Iconfont/iconfont.css'

import Index from '../components/Index'
import Posted from '../components/posted'
import Msg from '../components/msg'
import Signin from '../components/signin'
import Signout from '../components/signout'
import Mine from '../components/mine'
import Topic from '../components/topic'


class Routers extends Component{
    render(){
        return (     
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route exact  path='/posted' component={Posted} />
                <Route exact  path='/msg' component={Msg} />
                <Route exact  path='/signin' component={Signin} />
                <Route exact  path='/signout' component={Signout} />
                <Route exact  path='/mine/:loginname' component={Mine} />
                <Route exact path='/topic/:topicId' component={Topic} />
                <Redirect to="/" /> 
            </Switch>
        )
    }
}
 
 export default Routers
