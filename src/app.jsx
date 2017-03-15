import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory} from 'react-router';
import promise from 'redux-promise';

import 'react-select/dist/react-select.css';
import reducers from './reducers';
import routes from './routes';
import App from './main';

const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

render(
	<Router history={browserHistory} routes={routes}/>
	, document.getElementById('app-root'));
