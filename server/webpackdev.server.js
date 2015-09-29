var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpackDev.config.js');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

module.exports = function(app) {
	// 使用3000端口
	app.all('/dist/*', function(req, res) {
		proxy.web(req, res, {
			target: 'http://127.0.0.1:3000'
		});
	});

	//catch proxy errors!
	proxy.on('error', function(e) {
		console.log('Could not connect to proxy, please try again...');
	});

	var server = new WebpackDevServer(webpack(config), {
		contentBase: __dirname,
		hot: true,
		quiet: false,
		noInfo: true,
		publicPath: '/dist/',
		stats: {
			colors: true
		}
	}).listen(3000, '127.0.0.1', function() {
		console.log('socketio listen 3000');
	});
}
