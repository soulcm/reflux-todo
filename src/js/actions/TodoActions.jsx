var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
	'addItem',
	'editItem',
	'removeItem',
	'toggleAll',
	'toggleItem',
	'clearCompleted'
]);

module.exports = TodoActions;
