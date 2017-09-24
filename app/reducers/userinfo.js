/*
* @Author: WKongL
* @Date:   2017-08-22 23:11:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-22 23:15:55
*/

import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo (state = initialState,action){
    switch(action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}