import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import Routers from './routers'


let div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);

const mountNode = document.getElementById('root');

// applyMiddleware 为 createStore 注入了 middleware:
const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <Routers />
        </Provider>
    </HashRouter>,
    mountNode
);
