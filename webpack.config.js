const path = require('path')// 导入 node.js中专门操作路径的模块
// 1．导入 html-webpack-plugin这个插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2. new构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定要复制哪个页面
    template: './src/index.html',
    //指定复制出来的文件名和存放路径
    filename: 'index.html'
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development', // mode用来指定构建模式。可选值有 development 和 production
    entry: path.join(__dirname, './src/index.js'),//打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'),//输出文件的存放路径
        filename: 'js/bundle.js'//输出文件的名称
    },
    //插件的数组，将来webpack在运行时，会加载并调用这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        open: true,
        port: 80,
        host: '127.0.0.1'
    },
    module: {
        rules: [
            //定义了不同模块对应的 loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /.jpg|png|gif$/, use: 'url-loader?limit=22&outputPath=images' },
            { test: /.js$/, use: 'babel-loader', exclude: /node_modules/ }

        ]
    },
    //nosources-source-map。
    // devtool: 'eval-source-map',
    resolve: {
        alias: {
            //告诉 webpack，程序员写的代码中，@符号表示src这一层目录
            '@': path.join(__dirname, './src/')
        }
    },
    performance: {
        hints: 'error',
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000 // 整数类型（以字节为单位）
    }
}