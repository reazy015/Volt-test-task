import { FETCH_PRODUCTS } from '../actions/productAction';

export default function(products=[], action){
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload.data];
    default:
      return products;
  }
}
