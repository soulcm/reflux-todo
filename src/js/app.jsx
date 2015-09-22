var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');

require('../css/base');

// Router use
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var TodoStores = require('./stores/TodoStores');
var Header = require('./components/Header');
var TodoMain = require('./components/TodoMain');
var Footer = require('./components/Footer');

var TodoApp = React.createClass({
	mixins: [Reflux.connect(TodoStores, "todoState")],

	render: function() {
		return (
			<div>
				<section id="todoapp">
					<Header />
					<RouteHandler todoState={this.state.todoState} />
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

var routes = (
	<Route path="/" handler={TodoApp}>
		<Route name="All" path="/" handler={TodoMain} />
		<Route name="Completed" path="/completed" handler={TodoMain} />
		<Route name="Active" path="/active" handler={TodoMain} />
	</Route>
);

Router.run(routes, Router.HashLocation, function(Handler) {
	React.render(<Handler />, document.body);
});
