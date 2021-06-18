import React, { PureComponent } from 'react'

export default class Search extends PureComponent {
	render() {
		return (
			<div>
				<form className='form'>
					<input type='text' name='text' placeholder='Search User' />
					<input type='submit' value='Search' className='btn-dark btn-block' />
				</form>
			</div>
		)
	}
}
