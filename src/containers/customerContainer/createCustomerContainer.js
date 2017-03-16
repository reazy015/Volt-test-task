import React, { Component } from 'react';
import CreateCustomerComponent from '../../components/createCustomerComponent';

class CreateCustomerContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			showModal: false
		}
	}

	onCreateCustomer (event){
		event.preventDefault();
		this.props.createCustomers({
			name: event.target.name.value,
			address: event.target.address.value,
			phone: event.target.phone.value
		});
		this.closeModal();
	}

	closeModal(){
		this.setState({showModal: false});
	}

	openModal(){
		this.setState({showModal: true});
	}

	render(){
		return(
		<CreateCustomerComponent
				type={'Create new customer'}
				style={'success'}
				open={this.openModal.bind(this)}
				close={this.closeModal.bind(this)}
				showModal={this.state.showModal}
				actionToActWithCustomer={this.onCreateCustomer.bind(this)}
			/>
		)
	}
}
export default CreateCustomerContainer;
