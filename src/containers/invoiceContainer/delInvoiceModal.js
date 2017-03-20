import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class DeleteInvoiceModal extends Component {
	constructor(props){
	super(props);

		this.state = {
			showModal: false
		}
	}

	openModal(){
		this.setState({showModal: true})
	}

	closeModal(){
		this.setState({showModal: false})
	}

	onDeleteInvoice(){
		this.props.deleteInvoice(this.props.invoice.id);
		this.closeModal();
	}

	render(){
		return(
			<span>
				<Button bsStyle='danger' onClick={this.openModal.bind(this)}>Delete</Button>
					<Modal show={this.state.showModal}>
						<Modal.Header>
							<h1 style={{textAlign: 'center', color: 'red'}}>Attention!</h1>
						</Modal.Header>
						<Modal.Title
							style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
							Are you sure you want to delete this invoice?
						</Modal.Title>
						<Modal.Footer>
							<Button onClick={this.closeModal.bind(this)} bsStyle="success">NO</Button>
							<Button bsStyle="danger" onClick={this.onDeleteInvoice.bind(this)}>YES</Button>
						</Modal.Footer>
					</Modal>
			</span>
		)
	}
}

export default DeleteInvoiceModal;
