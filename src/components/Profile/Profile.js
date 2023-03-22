import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import styles from './Profile.module.scss';

const Profile = () => {
	const [user] = useAuthState(auth);
	console.log(user);
	const [name, setName] = useState(user.displayName);
	return (
		<div className={styles.profile}>
			<form>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					readOnly={false}
					disabled={false}
				/>
			</form>
		</div>
	);
};

export default Profile;
