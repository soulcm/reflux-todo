var React = require('react');

var TodoActions = require('../actions/TodoActions');

var TodoTextInput = React.createClass({
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
	}
});
