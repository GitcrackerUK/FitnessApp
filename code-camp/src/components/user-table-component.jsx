import React, { useState, useEffect } from 'react';
import axios from 'axios'


function UserTable(props) {
	const [ users, setUsers ] = useState([]);

	useEffect(() => {
				setUsers(props.user.users);
	});

	const deleteUser=(id)=>{
		console.log(id);
		console.log('pressed');
		axios.delete('http://localhost:5000/users/' + id).then((res) => console.log(res.data));
	}

	return (
		<table className="table col-md-8 mx-auto mt-5">
			<thead>
				<tr>
					<th scope="col" />
					<th scope="col">User</th>
					<th scope="col">Created</th>
					<th scope="col">Delete</th>
				</tr>
			</thead>
			<tbody >
				{
                    users.map((user,index)=> (<tr key={user._id} >
                        <th scope="row">{index+1}</th>
                        <td>{user.username}</td>
                        <td  >{user.createdAt.substring(0,10)}</td>
                        {<td ><button  className="mr-2 btn-sm btn-primary " onClick={()=>{
							deleteUser(user._id)
						}}>delete</button></td>}
                    </tr>))
                }
				
			</tbody>
		</table>
	);
}
// 
export default UserTable;
