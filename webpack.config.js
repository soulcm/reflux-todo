var path = require('path');
var webpack = require('webpack');
var mainPath = path.resolve(__dirname, 'src', 'js', 'app.jsx');
var buildPath = path.resolve(__dirname, 'public', 'dist');
var nodeModulePath = path.resolve(__dirname, 'node_modules');

module.exports = {
	entry: mainPath,
	output: {
		path: buildPath,
		filename: 'bundle.js'
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
	}
};
