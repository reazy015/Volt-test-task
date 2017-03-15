import React from 'react';
import { Grid, PageHeader, Table} from 'react-bootstrap';

export default (props) => {
	return(
		<Grid>
			<PageHeader>Products List</PageHeader>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Product Title</th>
						<th>Product Price</th>
					</tr>
				</thead>
				<tbody>
					{props.products.map( product => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.name}</td>
							<td>{product.price}</td>
						</tr>
					))
				}
				</tbody>
			</Table>
		</Grid>
	)
}
