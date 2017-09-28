/*
* @Author: WKongL
* @Date:   2017-08-13 12:22:41
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 21:05:37
*/
var path    = require('path'); 
var pkg     = require('./package.json');
var webpack = require('webpack'); 
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var getHtmlConfig = function(name){
    return{
        template    : __dirname + '/app/'+name+'.html',
        filename    : name+'.html',
        inject      : true,
        hash        :true
    }
}

var config = {
    entry : {
        'common' : Object.keys(pkg.dependencies),
        'index'  : [path.resolve(__dirname,'app/index.jsx')],
    },
    output : {
        path : __dirname +'/dist',
        //publicPath : '/dist/',
        filename:'js/[name].[chunkhash:8].js'
        // filename:'js/[name].js'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module :{
        loaders:[
            {test: /\.(js|jsx)$/,exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract({ fallback: "style-loader",use:"css-loader!postcss-loader"})},
            {test: /\.less$/,exclude: /node_modules/, loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!less-loader" })},
            {test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=resource/[name].[ext]'}
        ]
    },

    plugins: [
        // new webpack.LoaderOptionsPlugin({
        //     option:function(){
        //         return [autoprefixer] //自动加载CSS中的浏览器前缀
        //     }
        //  }),
        //html模板插件
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new webpack.BannerPlugin("Copyright by WKongL"),
        //提取CSS
        new ExtractTextPlugin('css/[name].[chunkhash:8].css'),
        // new ExtractTextPlugin('css/[name].css'),
        //提取公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/[name].[chunkhash:8].js'
            // filename : 'js/[name].js'
        }),
        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    devServer : {
        proxy: {
          // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
          // koa 代码在 ./mock 目录中，启动命令为 npm run mock
          '/api': {
            target: 'http://localhost:3000',
            secure: false
          }
        }
        // colors : true, //终端中输出结果为彩色
        // historyApiFallback : true, //不跳转，开发单页面应用时有用
        // inline : true //实时刷新
        // hot : true
    }

};

module.exports = config

