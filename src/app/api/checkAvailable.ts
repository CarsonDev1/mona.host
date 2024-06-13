import axios from "axios";

export async function getCheckAvailable(domain: string) {
    try {
      const urlCheck = `${process.env.NEXT_PUBLIC_API_CHECK_AVAILABLE}?domain=${domain}`;
			const response = await axios.get(urlCheck, {
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