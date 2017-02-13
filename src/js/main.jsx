var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

//var {Router, Route, hashHistory} = require('react-router'); other way to do lines 7-9. but not recommended

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App.jsx');
var Home = require('./components/Home.jsx');
var About = require('./components/About.jsx');

var jsx = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/about" component={About}/>
			<Route path="/work" component={Work}/>
			<Route path="/projects" component={Projects}/>
			<Route path="/contact" component={Contact}/>
		</Route>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));