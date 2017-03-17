import React from 'react';
import { Grid, PageHeader, Table} from 'react-bootstrap';

import CreateProductModal from '../containers/productContainer/createProductContainer';
import DeleteProductModal from '../containers/productContainer/delProductContainer';
import EditProductContainer from '../containers/productContainer/editProductContainer';

export default (props) => {
	return(
		<Grid>
			<PageHeader>Products List
				<CreateProductModal createProducts = { props.createProducts}/>
			</PageHeader>
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
              <td>
								<EditProductContainer product = { product } editProducts = { props.editProducts}/>
								<DeleteProductModal id = { product.id } deleteProducts = { props.deleteProducts }/>
							</td>
						</tr>
					))
				}
				</tbody>
			</Table>
		</Grid>
	)
}
