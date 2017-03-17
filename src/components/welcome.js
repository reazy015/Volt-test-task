import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

export default () => {
  return(
		<DocumentTitle title={'Invoice App'}>
		<Jumbotron>
	    <h1 style={{textAlign: 'center'}}>Welcome to Invoice App!</h1>
	    <p>Currently Products and Customers functionalities are only available. To use one of them, please, click on appropriate item in the header of the InvoiceApp. </p>
			<p>Invoices functionality currently in production, We apologize for the inconvenience:)</p>
	  </Jumbotron>
	</DocumentTitle>
	)
}
