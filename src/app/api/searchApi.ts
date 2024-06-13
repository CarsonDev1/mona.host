import axios from 'axios';

export async function postApiResponse(body: object, limit: number) {
	try {
		const baseUrl = `${process.env.NEXT_PUBLIC_API_SEARCH}`;
		const url = `${baseUrl}?limit=${limit}`;

		const response = await axios.post(url, body, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Key': process.env.NEXT_PUBLIC_APP_HOST_KEY,
			},
		});

		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
