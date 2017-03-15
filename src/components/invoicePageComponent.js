import React from 'react';
import { Grid, PageHeader, Table } from 'react-bootstrap';


export default (props) => {
	return(
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
	)
}
