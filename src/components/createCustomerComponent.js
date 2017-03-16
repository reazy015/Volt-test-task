import React from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';

export default (props) => {
  return(
	<span>
		<Button
			style={{verticalAlign: 'middle'}}
			onClick={props.open}
			bsStyle={props.style}>{props.type}</Button>
		<Modal show={props.showModal}>
			<Form onSubmit={props.actionToActWithCustomer}>
				<Modal.Header><h3>{props.header}</h3></Modal.Header>
				<Modal.Body>
					<FormGroup>
						<ControlLabel>Customer's name</ControlLabel>
						<FormControl
							 type='text' name='name'
							  defaultValue={props.customer ? props.customer.name : ''}/>
					<ControlLabel>Customer's address</ControlLabel>
						<FormControl
							 type='text' name='address'
							 defaultValue={props.customer ? props.customer.address : ''}/>
						<ControlLabel>Customer's phone</ControlLabel>
					<FormControl
						 type='text' name='phone'
						 defaultValue={props.customer ? props.customer.phone : ''}/>

				</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" bsStyle="primary">Create</Button>
				<Button	onClick={ props.close }	bsStyle="warning">Close</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	</span>
  )
}
