import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class TableRow extends Component {

    constructor(props){
        super(props);
        console.log('That is Row:');
        console.log(props);
	}
	
	
	render() {
		return (
			<tr  >
				<th scope="row">{this.props.index}</th>
				<td>{this.props.exercise.username}</td>
				<td>{this.props.exercise.description}</td>
				<td>{this.props.exercise.duration + ' min'}</td>
				<td>{this.props.exercise.date.substring(0, 10)}</td>
                <td>
                    <Link to={"/edit/"+this.props.exercise._id}>edit</Link> | <a href='/#' onClick={()=>this.props.delete(this.props.exercise._id)}>delete</a>
                </td>
			</tr>
		);
	}
}
