import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createInvoice } from '../../actions/invoiceAction';
import { fetchCustomers } from '../../actions/customerAction';
import { fetchProducts} from '../../actions/productAction';
import CreateInvoiceComponent from '../../components/createInvoiceComponent';


class CreateInvoiceContainer extends Component {
	componentWillMount(){
		this.props.fetchCustomers();
		this.props.fetchProducts();
	}
	render(){
		return(
			<CreateInvoiceComponent
				title = { 'Create Invoice' }
				header = { 'Create New Invoice' }
				action = { this.props.createInvoice }
				customers = { this.props.customers }
				products = { this.props.products }
				/>
		)
	}
}

function mapStateToProps(state){
	return {
		customers: state.customers,
		products: state.products
	}
}

export default connect(mapStateToProps, { createInvoice, fetchCustomers, fetchProducts })(CreateInvoiceContainer);
