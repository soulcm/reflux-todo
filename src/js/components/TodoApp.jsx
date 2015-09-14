var React = require('react');
var Reflux = require('reflux');

var TodoStores = require('../stores/TodoStores');
var Header = require('./Header');
var TodoMain = require('./TodoMain');
var Footer = require('./Footer');

function getTodoState() {
	return {
		list: TodoStores.getAll(),
		bAllComplete: TodoStores.areAllComplete()
	};
}

var TodoApp = React.createClass({
	mixins: [Reflux.connect(TodoStores, "todoState")],

	render: function() {
		return (
			<div>
				<section id="todoapp">
					<Header />
					<TodoMain
						todoState={this.state.todoState}
					/>
					<Footer todoState={this.state.todoState} />
				</section>
				<footer id="info">
					<p>Double-click to edit a todo</p>
					<p>Created by <a target="_blank" href="https://github.com/soulcm">soulcm</a></p>
				</footer>
			</div>
		);
	}
});

module.exports = TodoApp;

