var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<header> 
					<a href="home.html" class="logo-container">
						<img className="logo" src="assets/logoweb.png"/>
					</a>
				<li>
					<a href="work.html">Work</a>
				</li>
				<li>
					<a href="contact.html">Contact</a>
				</li>
			</header>
		<section className="home-section">
			<h1>Hello, my name is</h1> <h1 id="name">Kate Green</h1>
			<h3>UI Designer</h3>
		</section>
			<div className="bulb-contain">
				<img className="bulb" src="assets/bulbbw.jpg"/>
			</div>
			</div>
			)
	}
});

module.exports= Home;