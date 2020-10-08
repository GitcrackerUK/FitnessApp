import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditExercise extends Component {
	constructor(props) {
		super(props);
        console.log(props);
		this.state = {
			username    : '',
			description : '',
			duration    : 0,
			date        : new Date(),
			users       : []
		};

		this.ChangeUserName = this.ChangeUserName.bind(this);
		this.ChangeDescription = this.ChangeDescription.bind(this);
		this.ChangeDuration = this.ChangeDuration.bind(this);
		this.ChangeDate = this.ChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
        axios.get('https://code-camp-291818.ew.r.appspot.com/exercises/'+ this.props.match.params.id)
        .then(res=>{
            console.log(res);
          this.setState(  {
                username    : res.data.username,
                description : res.data.description,
                duration    : res.data.duration,
                date        : new Date(res.data.date)
            })
        })
        .catch(error=>{
            console.log(error);
        })



		axios.get('https://code-camp-291818.ew.r.appspot.com/users/').then((res) => {
			if (res.data.length > 0) {
				this.setState({
					// username : res.data[0].username,
					users    : res.data.map((user) => user.username)
				});
			}
		});
		console.log('Component did mount');
	}
	ChangeUserName(e) {
		this.setState({
			username : e.target.value
		});
	}
	ChangeDescription(e) {
		this.setState({
			description : e.target.value
		});
	}
	ChangeDuration(e) {
		this.setState({
			duration : e.target.value
		});
	}
	ChangeDate(date) {
		this.setState({
			date : date
		});
	}
	onSubmit(e) {
		e.preventDefault();
		const exercises = {
			username    : this.state.username,
			description : this.state.description,
			duration    : this.state.duration,
			date        : this.state.date
		};
		console.log(exercises);

		

		axios.post('https://code-camp-291818.ew.r.appspot.com/exercises/update/'+ this.props.match.params.id, exercises).then((res) => console.log(res.data))
		.catch(err=>console.log(err));
		
		document.location.href = '/';
	}
	render() {
		return (
			<div>
				<h3>Update Exercise Log</h3>
				<form action="" onSubmit={this.onSubmit}>
					<div className="form-group col-12 col-md-6 mt-5 mx-auto">
						<label>Username:</label>
						<select
							required
							className="form-control"
							value={this.state.username}
							onChange={this.ChangeUserName}
						>
							{this.state.users.map((user, key) => <option key={user + key}>{user}</option>)}
						</select>
					</div>
					<div className="form-group col-12 col-md-6 mx-auto">
						<label>Description</label>
						<input
							type="text"
							value={this.state.description}
							onChange={this.ChangeDescription}
							className="form-control"
						/>
					</div>
					<div className="form-group col-12 col-md-6 mx-auto">
						<label>Duration (in minutes)</label>
						<input
							type="text"
							value={this.state.duration}
							onChange={this.ChangeDuration}
							className="form-control"
						/>
					</div>

					<div className="form-group col-12 col-md-6 mx-auto">
						<DatePicker
							className=""
							dateFormat="dd/MM/yyyy"
							selected={this.state.date}
							onChange={this.ChangeDate}
						/>
					</div>
					<div className="form-group col-12 col-md-6 mx-auto">
						<input type="submit" value="Update Exercise Log" className="btn btn-primary " />
					</div>
				</form>
			</div>
		);
	}
}
