/*
* @Author: WKongL
* @Date:   2017-08-22 23:10:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-08 23:38:53
*/

import {combineReducers} from 'redux'
import userinfo from './userinfo'
import store from './store'

export default combineReducers({
    userinfo,
    store
})