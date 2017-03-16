import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';

class DeleteProductModal extends Component{
	constructor(props){
		super(props);

		this.state = { showModal: false}
	}

onDeleteProduct(){
	this.props.deleteProducts(this.props.id);
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
			<span>
        <Button onClick={this.openModal.bind(this)}>Delete</Button>

        <Modal show={this.state.showModal}>
          <Modal.Header>Attention!</Modal.Header>
					<Modal.Title>
						Are you sure you want to delete this product?
					</Modal.Title>
					<Modal.Footer>
						<Button onClick={this.closeModal.bind(this)} bsStyle="success">NO</Button>
						<Button onClick={this.onDeleteProduct.bind(this)} bsStyle="danger" >YES</Button>
					</Modal.Footer>
        </Modal>
      </span>
		)
	}
}

export default DeleteProductModal;
