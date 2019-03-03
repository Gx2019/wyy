//webpack配置   node.js文件
const path = require('path')
module.exports = {
    //给路径取别名
    // chainwebpack:callback(config)
    chainWebpack: config => {

        //  config.resolve.alias.set(pathName,绝对路径)
        config.resolve.alias
            .set('components', path.resolve(__dirname, './src/components'))
            .set('pages', path.resolve(__dirname, './src/pages'))
            .set('styles', path.resolve(__dirname, './src/assets/styles'))
            .set('untils', path.resolve(__dirname, './src/untils'))
    },
    devServer: {
        proxy: {
            '/ajax': {
                target: 'https://music.163.com/weapi/personalized/newsong',
                changeOrigin: true
            } //短暂开启一个后端服务器 就不会有同源策略
        }
    }
}