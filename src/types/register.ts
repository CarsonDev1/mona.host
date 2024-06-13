export interface SignUp {
	fullname: string;
	email: string;
	password: string;
	role_ids: [string];
	user_type?: string;
	gender: string;
	birthday: string;
	id_number: string;
	phone_number: string;
	company_name: string;
	company_email: string;
	company_phone_number: string;
	business_sectors: string;
	address: string;
	ward: string;
	district: string;
	province: string;
	country: string;
	postcode: string;
	tax_code: string;
	organization: false;
	g_recaptcha_response: string;
}
