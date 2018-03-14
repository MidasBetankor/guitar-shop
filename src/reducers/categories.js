import R from 'ramda';
import {
  FETCH_CATEGORIES_SUCCESS
} from '../actionTypes';

const initilState = {};

export default (state = initilState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload);  
      return R.merge(state, newValues);
    default:
      return state;
  }
}