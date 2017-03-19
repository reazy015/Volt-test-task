import React from 'react';
import { Grid, PageHeader, Table, Button } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import DocumentTitle from 'react-document-title';

import CreateInvoiceComponent from './createInvoiceComponent.js'

export default (props) => {
	return(
    <DocumentTitle title = { props.title }>
		<Grid>
			<PageHeader>Invoice List
				<span><LinkContainer to='/invoices/create'><Button style={{marginLeft: 10, verticalAlign:'middle'}}>Create</Button></LinkContainer></span>
			</PageHeader>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Customer Name</th>
						<th>Discount</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{props.invoices.map( invoice =>(
						<tr key={invoice.id}>
							<th>{invoice.id}</th>
						</tr>
					))}
				</tbody>
			</Table>
		</Grid>
  </DocumentTitle>
	)
}
