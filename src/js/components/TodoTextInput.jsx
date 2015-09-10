var React = require('react');

var TodoActions = require('../actions/TodoActions');

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({
	getInitialState: function() {
		return {
			value: this.props.value || ''
		};
	},

	render: function() {
		return (
			<input
		  		className={this.props.className}
				id={this.props.id}
				placeholder={this.props.placeholder}
				onBlur={this._save}
				onChange={this._onChange}
				onKeyDown={this._onKeyDown}
				value={this.state.value}
				autoFocus={true}
			/>
		);
	},

	_onChange: function(e) {
		this.setState({
			value: e.target.value
		});
	},

	_onKeyDown: function(e) {
		if(e.keyCode === ENTER_KEY_CODE) {
			this._save();
		}
	},

	_save: function() {
		this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	}
});

module.exports = TodoTextInput;
