import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<Fragment>
			<h1>About This App</h1>
			<p>App to search Github users</p>
			<p>Version: 1.0.0</p>
			<Link to='/'>
				<button className='btn btn-dark'>Back to Main Page</button>
			</Link>
		</Fragment>
	)
}

export default About
