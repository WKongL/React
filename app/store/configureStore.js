/*
* @Author: WKongL
* @Date:   2017-08-21 23:37:48
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-23 09:53:23
*/

import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState){
    const store = createStore(rootReducer,initialState,
        //出发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}