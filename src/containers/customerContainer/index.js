import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCustomers } from '../../actions/customerAction';
import  CustomerPageComponent  from '../../components/customerPageComponent';

class CustomerPageContainer extends Component{
	componentWillMount(){
		this.props.fetchCustomers();
	}
  render(){

    return(
				<CustomerPageComponent
					customers = { this.props.customers }
					/>
			)
  }
}

function mapStateToProps(state){
	return {
		customers: state.customers
	}
}

export default connect(mapStateToProps, { fetchCustomers })(CustomerPageContainer);
