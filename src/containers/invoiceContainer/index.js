import React, { Component } from 'react';
import { connect } from 'react-redux';

import InvoicePageComponent from '../../components/invoicePageComponent';
import CreateInvoiceComponent from '../../components/createInvoiceComponent';
import { fetchInvoices, createInvoice } from '../../actions/invoiceAction';

class InvoicePageContainer extends Component{
	componentWillMount(){
		this.props.fetchInvoices();
	}

  render(){
		return(
			<InvoicePageComponent
				invoices = { this.props.invoices }
				createInvoice = { this.props.createInvoice }
        title = { 'Invoices' }

				 />
		)
	}
}

function mapStateToProps(state){
	return {
		invoices: state.invoices,		
	}
}

export default connect(mapStateToProps, { fetchInvoices, createInvoice })(InvoicePageContainer);
