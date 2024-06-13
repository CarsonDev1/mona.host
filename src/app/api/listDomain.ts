import axios from 'axios';

export async function getListDomain() {
	try {
		const baseUrl = `${process.env.NEXT_PUBLIC_API_LIST_DOMAIN}`;

		const response = await axios.get(baseUrl, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
