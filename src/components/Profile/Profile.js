import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import styles from './Profile.module.scss';

const Profile = () => {
	const [user] = useAuthState(auth);
	console.log(user);
	const [name, setName] = useState(user?.displayName);
	const [editable, setEditable] = useState(false);
	return (
		<div className={styles.profile}>
			<form>
				<div className={styles.inputGroup}>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						readOnly={editable}
						disabled={editable}
					/>
				</div>
			</form>
			<img src={user?.photoURL} alt='Profile'></img>
		</div>
	);
};

export default Profile;
