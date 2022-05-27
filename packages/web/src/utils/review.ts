import axios from '../config/axios';
import { ReviewInterface } from '../interfaces';

export const getReviews = async (): Promise<ReviewInterface | null> => {
	try {
		const URL = process.env.URL_API;
		const response = await fetch(`${URL}/reviews`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getReview = async (id: string) => {
	try {
		const URL = process.env.URL_API;
		const response = await fetch(`${URL}/reviews/${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const updateReview = async (
	data,
	id: string
): Promise<ReviewInterface | null> => {
	const response = await axios({
		method: 'PUT',
		url: `/reviews/${id}`,
		data: { ...data },
	});

	console.log(response);
	return response.data;
};
