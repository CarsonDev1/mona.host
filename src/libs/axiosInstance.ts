import axios from 'axios';

function setTokenInLocalStorage(token: string) {
	localStorage.setItem('token', token);
}

const axiosInstance = axios.create({
	baseURL: 'http://192.168.1.64:8002',
	headers: {
		'Content-Type': 'application/json',
		'Key': process.env.NEXT_PUBLIC_APP_HOST_KEY,
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		console.error('Error in request interceptor:', error);
		return Promise.reject(error);
	}
);

export { axiosInstance, setTokenInLocalStorage };
