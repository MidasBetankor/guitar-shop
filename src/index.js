import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import reducers from './reducers/index';
import Layout from './containers/layout/Layout';
import Guitars from './containers/guitars/Guitars';
import Guitar from './containers/guitar/Guitar';
import Basket from './containers/basket/Basket';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path='/' component={Guitars}/>
        <Route path='categories/:id' component={Guitars}/>
      </Route>
      <Route path='guitars/:id' component={Guitar} />
      <Route path='/basket' component={Basket}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
