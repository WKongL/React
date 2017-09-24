/*
* @Author: WKongL
* @Date:   2017-08-22 23:16:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 09:15:47
*/

import * as actionTypes from '../constants/userinfo'

export function update(data){
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}