import React from 'react';
import { Grid, PageHeader, Table } from 'react-bootstrap';


export default (props) =>{
  return(
    <Grid>
      <PageHeader>Customer List</PageHeader>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
					{props.customers.map(customer => (
							<tr key={customer.id}>
								<td>{customer.id}</td>
								<td>{customer.name}</td>
								<td>{customer.address}</td>
								<td>{customer.phone}</td>
							</tr>))
						}

        </tbody>
      </Table>
    </Grid>
  )
}
