import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchProducts(){
	const request = axios.get(`${ROOT_URL}/products`);

	return {
		type: FETCH_PRODUCTS,
		payload: request
	}
}
