var React = require('react');
var classNames = require('classnames');

var TodoTextInput = require('./TodoTextInput');
var TodoActions = require('../actions/TodoActions');

var TodoItem = React.createClass({
	getInitialState: function() {
		return {
			isEditing: false
		}
	},

	render: function() {
		var todo = this.props.todo;
		var input;
		if (this.state.isEditing) {
			input = <TodoTextInput
				className="edit"
          		onSave={this._onSave}
          		value={todo.text}
			/>
		}
		var classes = classNames({
			'completed': todo.bComplete,
			'editing': this.state.isEditing
		});

		return (
			<li className={classes}>
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.bComplete}
						onChange={this._onToggleItem}
					/>
					<label onDoubleClick={this._onDoubleClick}>
						{todo.text}
					</label>
					<button className="destroy" onClick={this._onDestroyClick} />
				</div>
				{input}
			</li>
		);
	},

	_onDoubleClick: function() {
		this.setState({isEditing: true});
	},

	_onDestroyClick: function() {
		TodoActions.removeItem(this.props.todo.id);
	},

	_onToggleItem: function() {
		TodoActions.toggleItem(this.props.todo.id);
	},

	_onSave: function() {
		this.setState({isEditing: false});
	}
});

module.exports = TodoItem;
