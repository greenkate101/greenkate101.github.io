var React = require('react');
// var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Home = require('./Home.jsx');
var About = require('./About.jsx');
var Projects = require('./Projects.jsx');
var Contact = require('./Contact.jsx');


function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({
	render: function() {
		return (
		<div>

			<main>
				{this.props.children}
			</main>
		</div>
		);
	}
});

module.exports = App;