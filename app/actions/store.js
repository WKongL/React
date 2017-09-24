/*
* @Author: WKongL
* @Date:   2017-09-08 23:28:12
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-09 00:38:43
*/

import * as actionTypes from '../constants/store'

export function update(data){
    return {
        type: actionTypes.STORE_UPDATE,
        data: data
    }
}

export function add(item){
    return {
        type: actionTypes.STORE_ADD,
        data: item
    }
}

export function rm(item){
    return {
        type: actionTypes.STORE_RM,
        data: item
    }
}