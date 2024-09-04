export interface Address {
	street: string;
	city: string;
}

export interface UserDetail {
	id: number;
	full_name: string;
	email: string;
	address: Address;
}

export interface Photo {
	id: number;
	author: string;
	width: number;
	height: number;
	url: string;
	download_url: string;
}

export type UserDetailMap = Record<number, UserDetail>;
