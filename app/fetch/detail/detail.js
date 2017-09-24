/*
* @Author: WKongL
* @Date:   2017-09-06 17:38:37
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-06 17:38:40
*/

import { get } from '../get'

export function getInfoData(id) {
   const result = get('/api/detail/info/' + id)
   return result
}

export function getCommentData(page, id) {
    const result = get('/api/detail/comment/' + page + '/' + id)
    return result
}