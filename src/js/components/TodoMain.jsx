var React = require('react');
var Router = require('react-router');
var ReactPropTypes = React.PropTypes;

var TodoItem = require('./TodoItem');
var TodoActions = require('../actions/TodoActions');

var TodoMain = React.createClass({
	mixins: [Router.State],

	propTypes: {
		todoState: ReactPropTypes.object.isRequired
	},

	render: function() {
		var todos = this.props.todoState.list,filterTodos;
		if (todos.length < 1) {
			return null;
		}
		var bAllComplete = !!this.props.todoState.bAllComplete;
		switch (this.getPath()) {
			case '/completed':
				todos = todos.filter(function(item) {
					return item.bComplete;
				});
				break;
			case '/active':
				todos = todos.filter(function(item) {
					return !item.bComplete;
				});
				break;
			default:
				break;
		}
		return (
			<section id="main">
				<input
					id="toggle-all"
					type="checkbox"
					onChange={this._toggleAll}
					checked={bAllComplete}
				/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul id="todo-list">
					{
						todos.map(function(item) {
							return <TodoItem key={item.id} todo={item}/>
						})
					}
				</ul>
			</section>
		);
	},

	_toggleAll: function(e) {
		TodoActions.toggleAll(e.target.checked);
	}
});

module.exports = TodoMain;
