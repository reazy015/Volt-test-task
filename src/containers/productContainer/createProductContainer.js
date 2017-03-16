import React, { Component } from 'react';

import CreateEditProductComponent from '../../components/createEditProductComponent';

class CreateProductModal extends Component {
	constructor(props){
		super(props);

		this.state = { showModal: false }
	}

	addNewProduct(event){
		event.preventDefault();
		this.props.createProducts({
			name: event.target.name.value,
			price: event.target.price.value
		});
		this.closeModal();
	}

	openModal(){
		this.setState({ showModal: true })
	}

	closeModal(){
		this.setState({ showModal: false })
	}

	render(){
		return(
			<CreateEditProductComponent
				type={'Create'}
				open={this.openModal.bind(this)}
				close={this.closeModal.bind(this)}
				show={this.state.showModal}
				actionToProduct = { this.addNewProduct.bind(this) }
				/>
		)
	}
}

export default CreateProductModal;
