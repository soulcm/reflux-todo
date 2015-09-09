var React = require('react');

var Header = require('./Header');

var TodoApp = React.createClass({
	render: function() {
		return (
			<div>
				<section id="todoapp">
					<Header />
				</section>
				<footer id="info">
					<p>Double-click to edit a todo</p>
					<p>Created by <a href="javascript:void(0)">soulcm</a></p>
				</footer>
			</div>
		);
	}
});

module.exports = TodoApp;

