/*
* @Author: WKongL
* @Date:   2017-09-09 21:22:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-11 17:24:10
*/

import { get } from '../get'
import { post } from '../post'

export function getOrderListData(username) {
    const result = get('/api/orderlist/' + username)
    return result
}


export function postComment(id, comment, star) {
    const result = post('/api/submitComment', {
        id: id,
        comment: comment,
        star: star
    })
    return result
}