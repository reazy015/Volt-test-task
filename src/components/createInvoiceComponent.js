import React, { Component } from 'react';
import  DocumentTitle from 'react-document-title';
import { Grid, PageHeader, Table, FormGroup, InputGroup, FormControl, ControlLabel, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

export default class CreateInvoiceComponent extends Component {
		constructor(props){
			super(props);

			this.state = {
				discount: 0,
				customer: '',
				product: '',
				invoiceListItems: []
			}
		}

		onCustomerChange(customer){
			this.setState({customer});
		}

		onProductChange(product){
			this.setState({product});
		}

		onDiscountChange(event){
			this.setState({
				discount: event.target.value
			})
		}

		// Adding product to invoiceList

		onItemAdd(){
			if(!this.state.product) {
				return;
			}
			const newItem = {
				id: Date.now(),
				productId: this.state.product.value,
				qty: 1
			}

			let newInvoiceListItem = [...this.state.invoiceListItems];
			newInvoiceListItem.push(newItem);

			this.setState({
				invoiceListItems: newInvoiceListItem
			});
		};

		// Remove product from invoiceList

		onRemoveItem(itemId){
			let filteredInvItem = this.state.invoiceListItems.filter( item => item.id !== itemId);

			this.setState({
				invoiceListItems: filteredInvItem
			})
		}

		// Add quantity of chosen product

		onChangeQty(itemId, event){
			let currentItem = this.state.invoiceListItems.find( item => item.id === itemId);
			currentItem.qty = event.target.value;

			let filteredInvItem = this.state.invoiceListItems.filter( item => item.id !== itemId);
			filteredInvItem.push(currentItem);

			this.setState({
				invoiceListItems: filteredInvItem.sort(function(a,b){ return a.id > b.id})
			})
		}

		// Get total sum of invoice

		getTotalSum(){
			if(this.state.invoiceListItems.length) {
				const { discount } = this.state;

				let sum = this.state.invoiceListItems.reduce((previous, current) =>{
					const price = this.props.products.find( product => product.id === current.productId).price;

					return previous + (price*current.qty);
				},0)

				if( discount ){
					sum = sum - (sum/100*discount);
				}

				return ((sum*100)/100).toFixed(2)
			}

			return 0;
		}

    // Create Invoice and place it to DB

    onCreateInvoice(event){
      event.preventDefault();
      this.props.actionToCreateInvoice({
				customer_id: this.state.customer.value,
				discount: this.state.discount,
				total: this.getTotalSum()
			})
			console.log('Click!!!')
    }

render(){
	return(
		<Grid>
			<DocumentTitle title={this.props.title}/>
			<PageHeader>{this.props.header}</PageHeader>
			<Form onSubmit={this.onCreateInvoice.bind(this)}>
				<FormGroup>
					<ControlLabel>Discount (%)</ControlLabel>
					<FormControl
						type = 'number'
						name = ' dicount '
						min = '0'
						max = '100'
						placeholder = 'Enter Discount'
						style = {{width: 140}}
						onChange = { this.onDiscountChange.bind(this)}
						required
						/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Customer</ControlLabel>
					<Select
						name = 'customer'
						value = {this.state.customer}
						options = {this.props.customers.map( customer => {
							return {
								value: customer.id,
								label: customer.name
							}
						})}
						onChange={this.onCustomerChange.bind(this)}
						required
						/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Add Product</ControlLabel>
					<InputGroup>
						<Select
							name = 'product'
							value = {this.state.product}
							options = {this.props.products.map( product => {
								return {
									value: product.id,
									label: product.name
								}
							})}
							onChange = {this.onProductChange.bind(this)}
							required
							/>
						<InputGroup.Button><Button onClick={this.onItemAdd.bind(this)}>Add</Button></InputGroup.Button>
					</InputGroup>
				</FormGroup>
				<Table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Qty</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.invoiceListItems.map( item => {
								const product = this.props.products.find( product => product.id === item.productId);
								return (
									<tr key = { item.id}>
										<td>{product ? product.name : '...loading'}</td>
										<td>{product ? product.price : '...loading'}</td>
										<td>
											<FormControl
													type = 'number'
													name = 'qty'
													value = { item.qty}
													min = '1'
													onChange={this.onChangeQty.bind(this, item.id)}

												/>
										</td>
										<td><Button
											onClick = {this.onRemoveItem.bind(this, item.id)}
											bsStyle='danger'>Remove</Button></td>
									</tr>
								)
							})
						}
					</tbody>
				</Table>
				<div>
					<h2>Total Price: {this.getTotalSum()}</h2>
				</div>
				<Button	type='submit' bsStyle='success'>Create</Button>
				<LinkContainer to='/invoice'><Button bsStyle='warning'>Close</Button></LinkContainer>
			</Form>

		</Grid>
	)
}
}
