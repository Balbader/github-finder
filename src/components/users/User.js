import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';


const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { getUser, loading, user, getUserRepos, repos} = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		company,
		login,
		blog,
		email,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = user;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Link to='/' className='btn btn-dark'>
				Back To Search
			</Link>
			Hireable: {' '}
			{hireable ? (
				<i className='fas fa-check text-success' />
			) : (
				<i className='fas fa-times-circle text-danger' />
			)}
			<div className="card grid-2">
				<div className='all-center'>
					<img
						src={avatar_url}
						className='round-img'
						alt=''
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>{location}</p>
				</div>
				<div>
					{bio && (<Fragment>
						<h2><strong>Bio</strong></h2>
						<p>{bio}</p>
					</Fragment>
					)}
					<ul style={{ paddingTop: '10px' }}>
						<li>
							{login && (
								<Fragment>
									<strong>Username:</strong> {login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company:</strong> {company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website:</strong> {blog}
								</Fragment>
							)}
						</li>
						<li>
							{email && (
								<Fragment>
									<strong>Email:</strong> {email}
								</Fragment>
							)}
						</li>
					</ul>
					<a
						href={html_url}
						className='btn btn-dark my-1'
					>
						Full Github Profile
					</a>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge">Followers: {followers}</div>
				<div className="badge badge">Following: {following}</div>
				<div className="badge badge">Public Repos: {public_repos}</div>
				<div className="badge badge">Public Gists: {public_gists}</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	)
}

export default User
