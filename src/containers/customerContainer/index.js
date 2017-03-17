import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCustomers, createCustomers, delCustomers, editCustomerInfo } from '../../actions/customerAction';
import  CustomerPageComponent  from '../../components/customerPageComponent';

class CustomerPageContainer extends Component{
	componentWillMount(){
		this.props.fetchCustomers();
	}
  render(){

    return(
				<CustomerPageComponent
					customers = { this.props.customers }
					createCustomers = { this.props.createCustomers }
					delCustomers = { this.props.delCustomers }
					editCustomers = { this.props.editCustomerInfo }
					title = { 'Customers' }
					/>
			)
  }
}

function mapStateToProps(state){
	return {
		customers: state.customers
	}
}

export default connect(mapStateToProps, { fetchCustomers, createCustomers, delCustomers, editCustomerInfo })(CustomerPageContainer);
