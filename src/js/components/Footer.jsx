var React = require('react');
var Router = require('react-router');
var ReactPropTypes = React.PropTypes;

var Link = Router.Link;

var TodoActions = require('../actions/TodoActions');

var Footer = React.createClass({
	propTypes: {
		todoState: ReactPropTypes.object.isRequired
	},

	render: function() {
		var todos = this.props.todoState.list;
		var total = todos.length;
		if (total === 0) {
			return null;
		}
		var completed = todos.filter(function(item) {
			return item.bComplete;
		}).length;
		var itemsLeft = total - completed;
		var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
		itemsLeftPhrase += 'left';

		var clearCompletedButton;
		if (completed) {
		  clearCompletedButton =
		    <button
		    	id="clear-completed"
		    	onClick={this._onClearCompletedClick}>
		    	Clear completed ({completed})
		    </button>;
		}

		return (
			<footer id="footer">
				<span id="todo-count">
					<strong>
						{itemsLeft}
					</strong>
					{itemsLeftPhrase}
				</span>
				<ul id="filters">
				    <li>
				        <Link activeClassName="selected" to="All">All</Link>
				    </li>
				    <li>
				        <Link activeClassName="selected" to="Active">Active</Link>
				    </li>
				    <li>
				        <Link activeClassName="selected" to="Completed">Completed</Link>
				    </li>
				</ul>
				{clearCompletedButton}
			</footer>
		);
	},

	_onClearCompletedClick: function() {
		TodoActions.clearCompleted();
	}

});

module.exports = Footer;
