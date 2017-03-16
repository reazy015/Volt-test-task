import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory} from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';


import 'react-select/dist/react-select.css';
import rootReducer from './reducers/index';
import routes from './routes';
import App from './main';

const  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promise)));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
	, document.getElementById('app-root'));
