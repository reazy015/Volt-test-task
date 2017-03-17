import React from 'react';
import { Grid, PageHeader, Table, Button } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

export default (props) => {
	return(
    <DocumentTitle title = { props.title }>
		<Grid>
			<PageHeader>Invoice List</PageHeader>			
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
