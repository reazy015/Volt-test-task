// Type of actions from invoiceAction
import { FETCH_INVOICES, CREATE_INVOICE, DELETE_INVOICE } from '../actions/invoiceAction';

export default function(invoices=[], action){
	switch (action.type) {
		case FETCH_INVOICES:
			return [...action.payload.data];
		case CREATE_INVOICE:
			return [...invoices, action.payload.data];
		case DELETE_INVOICE:
			const filteredInvoices = invoices.filter( invoice => invoice.id !== 	action.payload.data.id);
			return [...filteredInvoices];
		default:
			return invoices;
	}
}
