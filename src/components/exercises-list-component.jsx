import React, { Component } from 'react';
import TableRow from './exercises-list-table-row.jsx';
import axios from 'axios';

const G_CLOUD = 'https://code-camp-291818.ew.r.appspot.com'

export default class ExercisesList extends Component {
	constructor(props) {
		super(props);
		this.deleteExercise = this.deleteExercise.bind(this);
		this.state = {
			exercises : []
		};
	}
	componentDidMount() {
		axios
			.get(G_CLOUD+'/exercises/')
			.then((res) => {
				this.setState({
					exercises : res.data
				});
			})
			.catch((err) => console.log(err));
	}
	deleteExercise(id) {
		axios.delete(G_CLOUD +'/exercises/' + id).then((res) => console.log(res.data));

		this.setState({
		    exercises: this.state.exercises.filter(el=> el._id !== id)
		})
	}

	exerciseList() {
		return this.state.exercises.map((res, index) => {
			return <TableRow key={res._id} delete={this.deleteExercise} exercise={res} index={index + 1} />;
		});
	}

	render() {
		return (
			<div>
				<h3>You are on Exercises List Component</h3>
				<table className="table mt-4">
					<thead>
						<tr>
							<th scope="col" />
							<th scope="col">Username</th>
							<th scope="col">Description</th>
							<th scope="col">Duration</th>
							<th scope="col">Date</th>
						</tr>
					</thead>
					<tbody>{this.exerciseList()}</tbody>
				</table>
			</div>
		);
	}
}
