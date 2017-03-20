import React, { Component } from 'react';
import { connect } from 'react-redux';

import InvoicePageComponent from '../../components/invoicePageComponent';
import CreateInvoiceComponent from '../../components/createInvoiceComponent';
import { fetchInvoices, createInvoice, deleteInvoice } from '../../actions/invoiceAction';
import { fetchCustomers } from '../../actions/customerAction';

class InvoicePageContainer extends Component{
	componentWillMount(){
		this.props.fetchInvoices();
		this.props.fetchCustomers();
	}

  render(){
		return(
			<InvoicePageComponent
				invoices = { this.props.invoices }
        customers = { this.props.customers }
				createInvoice = { this.props.createInvoice }
				deleteInvoice = { this.props.deleteInvoice }
        title = { 'Invoices' }

				 />
		)
	}
}

function mapStateToProps(state){
	return {
		invoices: state.invoices,
    customers: state.customers
	}
}

export default connect(mapStateToProps, { fetchInvoices, createInvoice, fetchCustomers, deleteInvoice })(InvoicePageContainer);
