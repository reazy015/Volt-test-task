import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

// Actions types
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const CREATE_CUSTOMERS = 'CREATE_CUSTOMERS';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';

// Get customer from DB
export function fetchCustomers(){
  const request = axios.get(`${ROOT_URL}/customers`);

  return {
    type: FETCH_CUSTOMERS,
    payload: request
  };
}
// Create customer and add to DB
export function createCustomers(customer){
  const request = axios.post(`${ROOT_URL}/customers`, customer)

  return {
    type: CREATE_CUSTOMERS,
    payload: request
  }
}

// Delete customer and remove from DB
export function delCustomers(id){
	const request = axios.delete(`${ROOT_URL}/customers/${id}`)
	console.log('Click!!')
	return {
		type: DELETE_CUSTOMER,
		payload: request
	}
}

// Edit customer and add to DB

export function editCustomerInfo(customer){
	const request = axios.put(`${ROOT_URL}/customers/${customer.id}`, customer);

	return {
		type: EDIT_CUSTOMER,
		payload: request
	}
}
