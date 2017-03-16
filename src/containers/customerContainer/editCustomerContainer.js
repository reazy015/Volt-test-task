import React, { Component } from 'react';
import CreateCustomerComponent from '../../components/createCustomerComponent';

class EditCustomerContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			showModal: false
		}
	}

	onEditCustomer(event){
		event.preventDefault();
		this.props.editCustomer({
			name: event.target.name.value,
			address: event.target.address.value,
			phone: event.target.phone.value,
			id: this.props.customer.id
		});
		this.closeModal();
	}

	openModal(){
		this.setState({ showModal: true })
	}

	closeModal(){
		this.setState({showModal: false})
	}

	render(){
		return(
			<CreateCustomerComponent
				type={'Edit'}
				style={'primary'}
				showModal={this.state.showModal}
				open={this.openModal.bind(this)}
				close={this.closeModal.bind(this)}
				customer={this.props.customer}
				actionToActWithCustomer={this.onEditCustomer.bind(this)}
				/>
		)
	}
}

export default EditCustomerContainer;
