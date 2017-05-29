import React, { Component } from 'react';

class GoogleMap extends Component {
	//one of the life cycle method that gets called automatically after the component is render to the screen 
	componentDidMount() {
		new google.maps.Map(this.refs.map, { //this is how we create an embedded google map inside our document => will take a reference to html node - element - and embed the map to that element (*this is how we use 3rd party libraries with react, esp., don't know what JSX or render method or react ecosystem*)
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	}
	render(){
		//react's ref (a prop) system => allows us to get a reference to HTML element that has been render to a page
		//=>after component is render to the screen, you can get a direct reference to the div that is created by referring to this.refs.map
		return <div ref="map" />
	}

}

export default GoogleMap;