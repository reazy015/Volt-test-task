import React from 'react';
import { Grid, PageHeader, Table, Button } from 'react-bootstrap';


export default (props) => {
	return(
		<Grid>
			<PageHeader>Invoice List</PageHeader>
			<Button bsStyle="success">Create</Button>
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
	)
}
