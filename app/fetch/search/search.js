/*
* @Author: WKongL
* @Date:   2017-09-05 23:14:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-05 23:14:29
*/

import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
    return result
}