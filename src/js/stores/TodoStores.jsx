var Reflux = require('reflux');

var TodoActions = require('../actions/TodoActions');

var STORAGE_KEY = 'todos';

var TodoStores = Reflux.createStore({
	listenables: [TodoActions],

	onAddItem: function(txt) {
		this._todoList.unshift({
			id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
			text: txt,
			bComplete: false,
			createdAt: +new Date(),
			updatedAt: +new Date()
		});
		this.updateList(this._todoList);
	},

	onEditItem: function(id) {

	},

	onRemoveItem: function(id) {
		var index = this._getIndex(id);
		this._todoList.splice(index, 1);
		this.updateList(this._todoList);
	},

	onToggleAll: function(checked) {
		this._todoList.forEach(function(item) {
			item.bComplete = checked;
		});
		this.updateList(this._todoList);
	},

	onToggleItem: function(id) {
		var index = this._getIndex(id);
		this._todoList[index].bComplete = !this._todoList[index].bComplete;
		this.updateList(this._todoList);
	},

	getInitialState: function() {
		var localList = localStorage.getItem(STORAGE_KEY);
		if (!localList) {
			this._todoList = [];
		} else {
			this._todoList = JSON.parse(localList);
		}
		return {
			list: this._todoList,
			bAllComplete: this._areAllComplete()
		};
	},

	updateList: function(list) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
		this._todoList = list;
		this.trigger({
			list: this._todoList,
			bAllComplete: this._areAllComplete()
		})
	},

	_areAllComplete: function() {
		return this._todoList.every(function(item) {
			return item.bComplete === true;
		});
	},

	_getIndex: function(id) {
		var i = 0,
			len = this._todoList.length;
		while (i < len) {
			if (this._todoList[i].id === id) {
				return i;
			}
			i++;
		}
		return i - 1;
	}
});

module.exports = TodoStores;
