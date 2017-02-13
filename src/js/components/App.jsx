var React = require('react');
// var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

// var Home = require('./components/Home.jsx');
// var Contact = require('./components/Contact.jsx');
// var Design = require('./components/Design.jsx');
// var Logo = require('./components/Logo.jsx');
// var Photography = require('./components/Photography.jsx');
// var Projects = require('./components/Projects.jsx');
// var Resume = require('./components/Resume.jsx');
// var Work = require('./components/Work.jsx');


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