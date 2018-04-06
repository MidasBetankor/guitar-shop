import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import guitars from './guitars';
import guitarsPage from './guitarsPage';
import guitarPage from './guitarPage';
import basket from './basket';
import categories from './categories';

import post  from './post'

export default combineReducers({
  routing: routerReducer,
  guitars,
  guitarsPage,
  guitarPage,
  basket,
  categories,
  post,
})