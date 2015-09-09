var Reflux = require('reflux');

var TodoActions = require('../actions/TodoActions');

var TodoStores = Reflux.createStore({
	listenables: [TodoActions],

	onAddItem: function(txt) {
		console.log(txt);
		this.trigger({a:'success'});
	}
});

module.exports = TodoStores;
