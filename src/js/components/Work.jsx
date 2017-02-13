var React = require('react');

var Work = React.createClass({
	render: function() {
		return (
			<div id="box">
		<a className="proj-link" href="photography.html">
			<img class="cover" id="photo-cover" src="assets/DEAW copy.jpg"/>
		</a>
		<a className="proj-link" href="logo.html">
			<img className="cover" id="logo-cover" src="assets/logoweb.png"/>
		</a>
		<a className="proj-link" href="design.html">
			<img className="cover" id="design-cover" src="assets/eyeprint.png"/>
		</a>
		<a className="proj-link" href="projects.html">
			<img className="cover" id="proj-cover" src="assets/Logos/sortielogo copy.png"/>
		</a>
	</div>
	)
	}
});

module.exports = Work;