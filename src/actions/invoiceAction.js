import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export const FETCH_INVOICES = 'FETCH_INVOICES';

export function fetchInvoices(){
	const request = axios.get(`${ROOT_URL}/invoices`)

	return {
		type: FETCH_INVOICES,
		payload: request
	}
}
