import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts, createProducts, delProducts, editPoduct } from '../../actions/productAction';
import ProductPageComponent from '../../components/productPageComponent';

class ProductPageContainer extends Component {
	componentWillMount(){
		this.props.fetchProducts();
	}
	render(){
		return(
			<ProductPageComponent
				 products = { this.props.products }
         createProducts = { this.props.createProducts }
				 deleteProducts = { this.props.delProducts }
				 editProducts = { this.props.editProducts }
			/>
		)
	}
}

function mapStateToProps(state){
	return{
		products: state.products
	}
}

export default connect(mapStateToProps, { fetchProducts, createProducts, delProducts, editPoduct })(ProductPageContainer);
