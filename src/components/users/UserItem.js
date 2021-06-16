import React, { Component } from 'react'

class UserItem extends Component {
	constructor() {
		super();
		this.state = {
			id: 'id',
			login: 'mojombo',
			avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
			html_url: 'https://github.com/mojombo'
		}
	}

	render() {
		return (
			<div className="card text-center">
				<img
					src={this.state.avatar_url}
					alt=""
					className="round-img"
					style={{ width: '60px' }}
				/>
			</div>
		);
	}
}
export default UserItem