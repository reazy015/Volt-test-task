import React, { Component } from 'react';

import CreateEditProductComponent from '../../components/createEditProductComponent';

class EditProductContainer extends Component{
  constructor(props){
    super(props);

    this.state = { showModal: false};
  }

	openModal(){
		this.setState({ showModal: true })

	}

	closeModal(){
		this.setState({ showModal: false })
	}

	onEditProduct(event){
		event.preventDefault();
		this.props.editProducts({
			name: event.target.name.value,
			price: event.target.price.value,
			id: this.props.product.id
		})
		this.closeModal();
	}

	render(){
			return(
				<CreateEditProductComponent
					 type = { 'Edit' }
					 show = { this.state.showModal }
					 open = { this.openModal.bind(this) }
					 close = { this.closeModal.bind(this) }
					 actionToProduct = { this.onEditProduct.bind(this)}
					 product = { this.props.product }
					/>
		)
	}
}

export default EditProductContainer;
