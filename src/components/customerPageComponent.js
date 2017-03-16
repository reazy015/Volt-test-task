import React from 'react';
import { Grid, PageHeader, Table } from 'react-bootstrap';

import CreateCustomerContainer from '../containers/customerContainer/createCustomerContainer';
import DeleteCustomerModal from  '../containers/customerContainer/delCustomerContainer';
import EditCustomerContainer from '../containers/customerContainer/editCustomerContainer';

export default (props) =>{
  return(
    <Grid>
      <PageHeader>Customer List
        <CreateCustomerContainer  createCustomers = { props.createCustomers}/>
      </PageHeader>
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
								<td>
									<EditCustomerContainer customer = { customer } editCustomer={props.editCustomers}/>
									<DeleteCustomerModal id ={customer.id} delCustomer={props.delCustomers}/>
								</td>
							</tr>))
						}

        </tbody>
      </Table>
    </Grid>
  )
}
