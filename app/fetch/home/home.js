/*
* @Author: WKongL
* @Date:   2017-08-26 15:50:12
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-27 15:51:05
*/

import {get} from '../get'

export function getAdData() {
    const result = get('api/homead')
    return result;
}

export function getListData(city,page){
    const result = get('/api/homelist/'+encodeURIComponent(city) + '/'+page)
    return result;
}