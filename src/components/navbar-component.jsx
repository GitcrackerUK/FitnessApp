import { Link } from 'react-router-dom';
import React, { Component } from 'react';


export default class Navbar extends Component {
	render() {
		return (
			<div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
				<Link to="/" className="navbar-brand d-none d-md-block" >
					ExcerTracker
				</Link>
				<div className="collapse navbar-collapse" />
				<ul className="navbar-nav mr-auto " >
					<li className="navbar-item">
						<Link to="/" className="nav-link">Exercises</Link>
					</li>
					<li className="navbar-item">
						<Link to="/create" className="nav-link" >Create Exercise Log</Link>
					</li>
					<li className="navbar-item">
						<Link to="/user" className="nav-link">Users</Link>
					</li>
				</ul>
			</nav>
            </div>
		);
	}
}
