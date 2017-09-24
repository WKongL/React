/*
* @Author: WKongL
* @Date:   2017-08-21 23:20:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-21 23:25:58
*/

export default {
    getItem : function(key){
        let value
        try{
            value = localStorage.getItem(key);
        } catch(e){
            //开发环境下提示error
            if(__DEV__){
                console.error('localStorage.getItem Error,',e.message);
            }
        } finally{
            return value;
        }
    },
    setItem : function(key,value){
        try{
            //ios safari 无痕模式下,直接使用 localStorage.setItem会报错
            localStorage.setItem(key,value);
        } catch(e) {
            //开发环境下提示 error
            if(__DEV__){
                console.error('localStorage.setItem Error,',ex.message);
            }
        }
    }
}