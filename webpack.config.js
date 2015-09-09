module.exports = {
	entry: ['webpack/hot/only-dev-server', './src/js/app'],
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'jsx?harmony'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		}]
	},
	resolve: {
		// you can now require('file') instead of require('file.coffee')
		extensions: ['', '.js', '.json', '.jsx', '.css']
	}
};
