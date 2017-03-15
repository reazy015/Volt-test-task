import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './main';
import CustomersList from './components/customersList';
import ProductList from './components/productList';
import InvoiceList from './components/invoiceList';


const routes = (
  <Route path='/' component={App}>
  	<IndexRoute component={CustomersList}/>
		<Route path='/invoice' component={InvoiceList}/>
		<Route path='/products' component={ProductList}/>
		<Route path='/customers' component={CustomersList}/>
  </Route>
);

export default routes;
