var React = require('react');

var Photography = React.createClass({
	render: function() {
		return (
			<div className="gallery">
				<figure className="gallery-item">
					<img className="thumbnail" src="assets/Photos/carolweb.jpg"/>
				</figure>
				<figure className="gallery-item">
					<img className="thumbnail" src="assets/Photos/graveweb.jpg"/>
				</figure>
				<figure className="gallery-item">
					<img class="thumbnail" src="assets/Photos/sportsweb.jpg"/>
				</figure>
				<figure className="gallery-item">
					<img className="thumbnail" src="assets/Photos/corey.jpg"/>
				</figure>
				<figure className="gallery-item">
					<img className="thumbnail" src="assets/Photos/ashton.jpg"/>
				</figure>
			</div>
			)
	}

});

module.exports = Photography;