import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';

export function fetchCustomers(){
  const request = axios.get(`${ROOT_URL}/customers`);

  return {
    type: FETCH_CUSTOMERS,
    payload: request
  };
}

// export function createCustomer(customer) {
//   const request = axios.post(`${ROOT_URL}/customers`, customer);
//
//   return {
//     type: AppConstants.CUSTOMER_CREATE_SUCCESS,
//     payload: request
//   };
// }
//
// export function editCustomer(customer) {
//   const request = axios.put(`${ROOT_URL}/customers/${customer.id}`, customer);
//
//   return {
//     type: AppConstants.CUSTOMER_UPDATE_SUCCESS,
//     payload: request
//   };
// }
//
// export function removeCustomer(customerId) {
//   const request = axios.delete(`${ROOT_URL}/customers/${customerId}`);
//
//   return {
//     type: AppConstants.CUSTOMER_DELETE_SUCCESS,
//     payload: request
//   };
// }
