import UserItem from './UserItem';
import Spinner from '../layout/spinner.gif';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
	if (loading) {
		return <img src={Spinner} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
	} else {
		return (
			<div style={userStyle}>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
}


const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}

export default Users
