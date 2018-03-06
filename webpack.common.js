const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryPath = path.resolve(__dirname, 'src');
const devPath = path.resolve(__dirname, 'dist');
const publicPath = '/';


module.exports = {
    entry:{
        index:[
            'babel-polyfill',
             path.resolve(entryPath, 'index.js')
        ],
        vendor:['react','react-dom','redux','react-redux']
    },    
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'react-cnode',     //根据模板插入css/js等生成最终HTML
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './src/template/index.html', //html模板路径        
            showErrors: true
        })
    ],
    output:{
        publicPath, //编译好的文件，在服务器的路径
        path: devPath, //编译到当前目录
        filename: '[name].bundle.js' //编译后的文件名字
    },
    module:{
        rules:[
            {
                test: /\.(js|es|es6|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                          ['react'],
                          ['stage-2']
                      ],
                      plugins: ['transform-object-rest-spread','transform-es2015-destructuring']
                    }
                }
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    {
                        loader: "style-loader"  //creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader"    //translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader"   //compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx']    //后缀名自动补全
    }
}