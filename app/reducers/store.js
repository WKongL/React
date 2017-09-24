/*
* @Author: WKongL
* @Date:   2017-09-08 23:32:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-09 00:31:11
*/

import * as actionTypes from '../constants/store'

const initialState = []

export default function store(state = initialState,action){
    switch(action.type){
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            state.unshift(action.data) 
            return state
        case actionTypes.STORE_RM:
            return state.filter(item =>{
                if(item.id !== action.data.id){
                    return item
                }
            })
        default:
            return state
    }
}