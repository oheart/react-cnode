var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.js');

const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
  };
  
  WebpackDevServer.addDevServerEntrypoints(config, options);
  
//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
	// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
    proxy: {
	    "/api/*": {
		    target: "https://cnodejs.org",
		    secure: false
	    }
    },
    contentBase: './dist',
    hot: true,
    host: 'localhost'
});

//将其他路由，全部返回index.html
server.app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

server.listen(4000);
