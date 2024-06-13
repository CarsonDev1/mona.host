import z from 'zod';

// Register Request Body Schema
export const RegisterBody = z
	.object({
		fullname: z
			.string()
			.min(2, 'Họ và tên phải chứa ít nhất 2 ký tự')
			.max(256, 'Họ và tên không được vượt quá 256 ký tự'),
		email: z.string().email('Email không hợp lệ'),
		password: z
			.string()
			.min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
			.max(100, 'Mật khẩu không được vượt quá 100 ký tự'),
		role_ids: z.array(z.string()),
		user_type: z.string(),
		gender: z.string(),
		birthday: z.string(),
		id_number: z.string(),
		phone_number: z.string(),
		company_name: z.string(),
		company_email: z.string(),
		company_phone_number: z.string(),
		business_sectors: z.string(),
		address: z.string(),
		ward: z.string(),
		district: z.string(),
		province: z.string(),
		country: z.string(),
		postcode: z.string(),
		tax_code: z.string(),
		organization: z.boolean(),
		g_recaptcha_response: z.string(),
	})
	.strict();

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>;

// Register Response Schema
export const RegisterRes = z.object({
	data: z.object({
		token: z.string(),
		expiresAt: z.string(),
		account: z.object({
			id: z.number(),
			name: z.string(),
			email: z.string(),
		}),
	}),
	message: z.string(),
});

export type RegisterResType = z.TypeOf<typeof RegisterRes>;

// Login Request Body Schema
export const LoginBody = z
	.object({
		username: z.string().min(2, 'Vui lòng nhập tài khoản').max(256, 'Tài khoản không được vượt quá 256 ký tự'),
		password: z
			.string()
			.min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
			.max(100, 'Mật khẩu không được vượt quá 100 ký tự'),
		remember_me: z.boolean(),
	})
	.strict();

export type LoginBodyType = z.TypeOf<typeof LoginBody>;

// Login Response Schema
export const LoginRes = RegisterRes;

export type LoginResType = z.TypeOf<typeof LoginRes>;

// Slide Session Schema
export const SlideSessionBody = z.object({}).strict();

export type SlideSessionBodyType = z.TypeOf<typeof SlideSessionBody>;
export const SlideSessionRes = RegisterRes;

export type SlideSessionResType = z.TypeOf<typeof SlideSessionRes>;
