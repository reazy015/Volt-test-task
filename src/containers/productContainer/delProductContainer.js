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
        <Button
					style={{marginLeft: 5}}
					bsStyle='danger'
					onClick={this.openModal.bind(this)}>Delete</Button>

        <Modal show={this.state.showModal}>
          <Modal.Header style={{textAlign: 'center', color: 'red'}}><h1>Attention!</h1></Modal.Header>
					<Modal.Title style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
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
