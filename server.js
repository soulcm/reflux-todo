var express = require('express');
var app = express();
var path = require('path');

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? 8080 : 8888;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

if (!isProduction) {
	require('./server/webpackdev.server')(app);
}

app.listen(port, function() {
	console.log('Server running on port ' + port);
});
