import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import allReducers from './reducers/index'

let store = createStore(allReducers)

// code stuff here

ReactDOM.render(<div><h2>Hey now</h2></div>, document.getElementById('content'));
