import { FETCH_INVOICES } from '../actions/invoiceAction';

export default function(invoices=[], action){
	switch (action.type) {
		case FETCH_INVOICES:
			return [...action.payload.data]
		default:
			return invoices
	}
}
