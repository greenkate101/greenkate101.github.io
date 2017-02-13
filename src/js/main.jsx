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
var Contact = require('./components/Contact.jsx');
var Design = require('./components/Design.jsx');
var Logo = require('./components/Logo.jsx');
var Photography = require('./components/Photography.jsx');
var Projects = require('./components/Projects.jsx');
var Resume = require('./components/Resume.jsx');
var Work = require('./components/Work.jsx');


var jsx = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			// <Route path="/resume" component={Resume}/>
			<Route path="/work" component={Work}/>
				<Route path="/photography" component={Photography}/>
				<Route path="/logo" component={Logo}/>
				<Route path="/design" component={Design}/>
				<Route path="/projects" component={Projects}/>
			</Route>
			<Route path="/contact" component={Contact}/>
	</Router>
);

ReactDOM.render(jsx, document.querySelector('#app'));