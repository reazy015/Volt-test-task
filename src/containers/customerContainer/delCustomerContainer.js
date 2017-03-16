import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class DeleteCustomerModal extends Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false
    }
  }

  onDeleteCustomer(){
			this.props.delCustomer(this.props.id);
			this.closeModal();
  }

	closeModal(){
		this.setState({ showModal: false });
	}

	openModal(){
		this.setState({ showModal: true });
	}

	render(){
		return(
			<span>
				<Button onClick={this.openModal.bind(this)} bsStyle='danger'>Delete</Button>

				<Modal show={this.state.showModal}>
					<Modal.Header>Attention!</Modal.Header>
					<Modal.Title>Are you sure you want to delete this customer?</Modal.Title>
					<Modal.Footer>
						<Button onClick={this.closeModal.bind(this)} bsStyle="success">NO</Button>
						<Button bsStyle="danger" onClick={this.onDeleteCustomer.bind(this)}>YES</Button>
					</Modal.Footer>
				</Modal>
			</span>
		)
	}

}

export default DeleteCustomerModal;
