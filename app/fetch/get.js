/*
* @Author: WKongL
* @Date:   2017-08-26 15:26:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-26 15:29:10
*/

import 'whatwg-fetch'
import 'es6-promise'

export function get(url){
    var result = fetch(url,{
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    return result;
}