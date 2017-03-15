import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../actions/productAction';
import ProductPageComponent from '../../components/productPageComponent';

class ProductPageContainer extends Component {
	componentWillMount(){
		this.props.fetchProducts();
	}
	render(){
		return(
			<ProductPageComponent
				 products={this.props.products}
			/>
		)
	}
}

function mapStateToProps(state){
	return{
		products: state.products
	}
}

export default connect(mapStateToProps, { fetchProducts })(ProductPageContainer);
