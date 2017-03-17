import React from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';

export default (props) => {
  return(
		<span>
			<Button
				style={{marginLeft: 10, verticalAlign: 'middle'}}
				onClick={props.open}
				>{props.type}</Button>
			<Modal show={props.show}>
				<Form onSubmit={props.actionToProduct}>
					<Modal.Header><h3 style={{textAlign: 'center'}}>{props.header}</h3></Modal.Header>
					<Modal.Body>
							<FormGroup>
								<ControlLabel>Product Title</ControlLabel>
								<FormControl
									 type='text' name='name' defaultValue = { props.product ? props.product.name : '' }
									 placeholder = 'Neon Green Hat'
									  required/>
								<ControlLabel>Product Price</ControlLabel>
								<FormControl
									 type='number' step='any' name='price' defaultValue = { props.product ? props.product.price : ''}
									 placeholder='9.99'
									  required/>
							</FormGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button type='submit' bsStyle="success">{props.type}</Button>
						<Button onClick={props.close} bsStyle="warning">Close</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</span>
  )
}
