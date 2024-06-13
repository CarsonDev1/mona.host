// /pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface RegisterRequest extends NextApiRequest {
	body: {
		address: string;
		city: string;
		fullname: string;
		id_number: string;
		email: string;
		phone_number: string;
		birthday?: Date | null;
		national?: string;
		gender?: string;
		district: string;
		ward: string;
		password: string;
		confirmPassword: string;
	}
}

interface RegisterResponse {
	token: string;
	user: {
		id: string;
		fullname: string;
		email: string;
	};
}

export default async function register(req: RegisterRequest, res: NextApiResponse) {
	const {
		address, city, fullname, id_number, email, phone_number, birthday,
		national, gender, district, ward, password, confirmPassword
	} = req.body;

	if (password !== confirmPassword) {
		return res.status(400).json({ error: 'Passwords do not match' });
	}

	try {
		const response = await axios.post<RegisterResponse>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/register`, {
			address, city, fullname, id_number, email, phone_number, birthday,
			national, gender, district, ward, password
		});

		const { token, user } = response.data;

		// Lưu token vào cookies
		res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly`);

		res.status(200).json({ user });
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
}
