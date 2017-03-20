import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

// Actions types
export const FETCH_INVOICES = 'FETCH_INVOICES';
export const CREATE_INVOICE = 'CREATE_INVOICE';
export const DELETE_INVOICE = 'DELETE_INVOICE';

// Get initial invoices
export function fetchInvoices(){
	const request = axios.get(`${ROOT_URL}/invoices`)

	return {
		type: FETCH_INVOICES,
		payload: request
	}
}

// Create invoice and add to DB
export function createInvoice(invoice){
	const request = axios.post(`${ROOT_URL}/invoices`, invoice);

	return {
		type: CREATE_INVOICE,
		payload: request
	}
}

// Delete invoice

export function deleteInvoice(invoiceId){
  const request = axios.delete(`${ROOT_URL}/invoices/${invoiceId}`);

  return {
    type: DELETE_INVOICE,
    payload: request
  }
}
