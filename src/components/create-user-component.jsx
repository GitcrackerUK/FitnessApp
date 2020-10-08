import React, { Component } from 'react';
import UserTable from './user-table-component'
import axios from 'axios';

export default class CreateUser extends Component {
	constructor(prop) {
		super(prop);

		this.state = {
			username : '',
			users    : []
		};

		this.ChangeUserName = this.ChangeUserName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		this.getUsers();
	}
	componentDidUpdate(prevProp,prevState){
		if(prevState.users !== this.state.users){
			console.log("State has changed");
			
		}
	}

	getUsers = async()=>{
		let asyncRes = await axios.get('https://code-camp-291818.ew.r.appspot.com/users/')
		this.setState({
			users: asyncRes.data
		})		
	};

	ChangeUserName(e) {
		this.setState({
			username : e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const user = {
			username : this.state.username
		};
		axios.post('https://code-camp-291818.ew.r.appspot.com/users/add/', user)
		.then((res) => console.log(res))
		.then(()=>{
			this.setState({
				username : ''
			});
		})

		
		
	}

	render() {
		return (
			<div>
				<h3>You are on Create/Delate User Page.</h3>
				<form action="" onSubmit={this.onSubmit}>
					<div className="form-group col-12 col-md-6 mt-5 mx-auto">
						<label>User</label>
						<input
							type="text"
							value={this.state.username}
							onChange={this.ChangeUserName}
							className="form-control"
						/>
					</div>
					<div className="form-group col-12 col-md-6 mx-auto">
						<input type="submit" value="Create User" className="btn btn-primary " />
					</div>
				</form>
				<UserTable user={this.state}> </UserTable>
			</div>
		);
	}
}
