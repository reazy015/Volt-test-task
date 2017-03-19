import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './main';
import CustomerPageContainer from './containers/customerContainer/index';
import ProductPageContainer from './containers/productContainer/index';
import InvoicePageContainer from './containers/invoiceContainer/index';
import CreateInvoiceContainer from './containers/invoiceContainer/createInvoiceContainer';
import Welcome from './components/welcome';


const routes = (
  <Route path='/' component={App}>
  	<IndexRoute component={Welcome}/>
		<Route path='/invoice' component={InvoicePageContainer}/>
    <Route path='/invoices/create' component={CreateInvoiceContainer}/>
		<Route path='/products' component={ProductPageContainer}/>
		<Route path='/customers' component={CustomerPageContainer}/>
  </Route>
);

export default routes;
