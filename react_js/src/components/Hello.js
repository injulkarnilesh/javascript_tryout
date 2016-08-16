import React from 'react';

class Hello extends React.Component {
	render() {
		return (
			<h2>Hello there {this.props.params.name}</h2>
		)
	}
}

export default Hello;