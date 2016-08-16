import React from 'react';
import {Link} from 'react-router';
const yeomanImage = require('../images/yeoman.png');

class Home extends React.Component {
	
	render() {
		const name = 'Nilesh';
		return (
			<div className="index"> 
				<img src={yeomanImage} alt="Yeoman Generator" />
        		<div className="notice">Code under maintenance</div>
				<h1>Home sweet home.</h1>
				<span>
					<Link className="menu-link" to="/todo">ToDo</Link>
					<Link className="menu-link" to={`/hello/${name}`}>Hello</Link>
				</span>
				<hr></hr>
				{this.props.children}
			</div>
		)
	}
}

export default Home;