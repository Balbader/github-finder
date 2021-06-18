import React, { PureComponent } from 'react'

export default class Search extends PureComponent {
	state = {
		text: ''
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text'
						placeholder='Search User'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn-dark btn-block'
					/>
				</form>
			</div>
		)
	}
}
