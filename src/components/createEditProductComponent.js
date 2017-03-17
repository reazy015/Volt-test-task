import React from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';

export default (props) => {
  return(
		<span>
			<Button
				onClick={props.open}
				>{props.type}</Button>
			<Modal show={props.show}>
				<Form onSubmit={props.actionToProduct}>
					<Modal.Header>{props.header}</Modal.Header>
					<Modal.Body>
							<FormGroup>
								<ControlLabel>Product Title</ControlLabel>
								<FormControl type='text' name='name' defaultValue = { props.product ? props.product.name : '' }/>
								<ControlLabel>Product Price</ControlLabel>
								<FormControl type='text' name='price' defaultValue = { props.product ? props.product.price : ''}/>
							</FormGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button type='submit' >{props.type}</Button>
						<Button onClick={props.close}>Close</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</span>
  )
}
