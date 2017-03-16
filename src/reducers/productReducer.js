//Types of actions for Products
import { FETCH_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS, EDIT_PRODUCTS } from '../actions/productAction';

export default function(products=[], action){
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload.data];
		case ADD_PRODUCTS:
			return [...products, action.payload.data];
		case DELETE_PRODUCTS:
			const filteredProducts = products.filter( product => product.id !== action.payload.data.id);
			return [...filteredProducts];
			case EDIT_PRODUCTS:
			const newProductsState = products.filter( product => product.id !== action.payload.data.id);
			return [...newProductsState, action.payload.data];
    default:
      return products;
  }
}
