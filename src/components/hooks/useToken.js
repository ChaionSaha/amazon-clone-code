import axios from 'axios';
import { useEffect, useState } from 'react';

function useToken(user) {
	const email = user?.user?.email;
	const [token, setToken] = useState('');

	useEffect(() => {
		async function getToken() {
			if (email) {
				const { data } = await axios.post(
					'https://genius-car-server-ekrb.onrender.com/login',
					{ email }
				);
				localStorage.setItem('accessToken', `${data}`);
				setToken(data);
			}
		}
		getToken();
	}, [user]);

	return [token];
}

export default useToken;
