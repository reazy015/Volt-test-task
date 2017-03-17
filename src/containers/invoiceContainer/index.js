import React, { Component } from 'react';
import { connect } from 'react-redux';

import InvoicePageComponent from '../../components/invoicePageComponent';
import { fetchInvoices } from '../../actions/invoiceAction';

class InvoicePageContainer extends Component{
  render(){
		return(
			<InvoicePageComponent
				invoices={this.props.invoices}
        title = { 'Invoices' }
				 />
		)
	}
}

function mapStateToProps(state){
	return {
		invoices: state.invoices
	}
}

export default connect(mapStateToProps, { fetchInvoices })(InvoicePageContainer);
