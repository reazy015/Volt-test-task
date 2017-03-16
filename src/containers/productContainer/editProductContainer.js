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
		this.props.editProducts({
			name: event.target.name.value,
			price: event.target.name.value,
			id: this.props.product.id
		});
		this.closeModal();
	}

	render(){
			return(
				<CreateEditProductComponent
					 type = { 'Create' }
					 show = { this.state.showModal }
					 open = { this.openModal.bind(this) }
					 close = { this.closeModal.bind(this) }
					 actionToProduct = { this.props.onEditProduct}
					/>
		)
	}
}

export default EditProductContainer;
