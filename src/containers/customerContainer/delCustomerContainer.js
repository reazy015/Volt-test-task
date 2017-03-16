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
					<Modal.Header>
						<h1 style={{textAlign: 'center', color: 'red'}}>Attention!</h1>
					</Modal.Header>
					<Modal.Title
						style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
						Are you sure you want to delete this customer?
					</Modal.Title>
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
