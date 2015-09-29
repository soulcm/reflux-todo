var path = require('path');
var webpack = require('webpack');
var mainPath = path.resolve(__dirname, 'src', 'js', 'app.jsx');
var buildPath = path.resolve(__dirname, 'public', 'dist');
var nodeModulePath = path.resolve(__dirname, 'node_modules');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://127.0.0.1:3000',
		mainPath
	],
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: 'http://127.0.0.1:3000/dist/'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'jsx?harmony'],
			exclude: [nodeModulePath]
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.jsx', '.css']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
