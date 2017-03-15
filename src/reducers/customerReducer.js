import { FETCH_CUSTOMERS } from '../actions/customerAction';

export default function(customers=[], action){
	switch (action.type) {
		case FETCH_CUSTOMERS:
			return [...action.payload.data];
		default:
			return customers;
	}
}
