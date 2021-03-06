// Type of actions for Customers
import { FETCH_CUSTOMERS, CREATE_CUSTOMERS, DELETE_CUSTOMER, EDIT_CUSTOMER } from '../actions/customerAction';

export default function(customers=[], action){
	switch (action.type) {
		case FETCH_CUSTOMERS:
			return [...action.payload.data];
    case CREATE_CUSTOMERS:
      return [...customers, action.payload.data];
		case DELETE_CUSTOMER:
			const filteredCustomers = customers.filter( customer => customer.id !== action.payload.data.id);
			return [...filteredCustomers];
		case EDIT_CUSTOMER:
			const newCustomersState = customers.filter(customer => customer.id !== action.payload.data.id);
			return [...newCustomersState, action.payload.data];
		default:
			return customers;
	}
}
