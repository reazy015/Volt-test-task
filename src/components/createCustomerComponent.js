import React from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';

export default (props) => {
  return(
	<span>
		<Button
			style={{verticalAlign: 'middle', marginLeft: 10}}
			onClick={props.open}>{props.type}</Button>
		<Modal show={props.showModal}>
			<Form onSubmit={props.actionToActWithCustomer}>
				<Modal.Header><h3 style={{textAlign: 'center'}}>{props.header}</h3></Modal.Header>
				<Modal.Body>
					<FormGroup>
						<ControlLabel>Customer's name</ControlLabel>
						<FormControl
							 type='text' name='name'
							  defaultValue={props.customer ? props.customer.name : ''}
								placeholder='Mark Benson'
								 required/>
					<ControlLabel>Customer's address</ControlLabel>
						<FormControl
							 type='text' name='address'
							 defaultValue={props.customer ? props.customer.address : ''}
							 placeholder='353 Rochester St, Rialto FL 43250'
							  required/>
						<ControlLabel>Customer's phone</ControlLabel>
					<FormControl
						 type='text' name='phone'
						 defaultValue={props.customer ? props.customer.phone : ''}
						 placeholder='555-534-2342'
						 required/>
				</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" bsStyle="success">Create</Button>
				<Button	onClick={ props.close }	bsStyle="warning">Close</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	</span>
  )
}
