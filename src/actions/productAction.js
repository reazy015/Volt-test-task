import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

// Actions types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS';
export const EDIT_PRODUCTS = 'EDIT_PRODUCTS';

// Get products from DB
export function fetchProducts(){
	const request = axios.get(`${ROOT_URL}/products`);

	return {
		type: FETCH_PRODUCTS,
		payload: request
	}
}

// Add new producst to DB
export function createProducts(product){
	const request = axios.post(`${ROOT_URL}/products`, product);

	return {
		type: ADD_PRODUCTS,
		payload: request
	}
}

// Delete products and remove from DB
export function delProducts(id){
	const request = axios.delete(`${ROOT_URL}/products/${id}`);

	return {
		type: DELETE_PRODUCTS,
		payload: request
	}
}

// Edit products and add to DB
export function editPoduct(product){
	const request = axios.put(`${ROOT_URL}/products/${product.id}`, product);

	return {
		action: EDIT_PRODUCTS,
		payload: request
	}
}
