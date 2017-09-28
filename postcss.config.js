/*
* @Author: WKongL
* @Date:   2017-08-17 22:39:37
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 21:03:47
*/

// module.exports = {
//     plugins: [
//         require('autoprefixer')({
//             browsers: ['last 5 versions']
//         })
//     ]
// }

module.exports = {
  plugins: [
    require('autoprefixer')({browsers:'ios >= 8'})
  ]
}