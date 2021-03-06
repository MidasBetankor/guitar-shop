import {
  FETCH_GUITARS_SUCCESS,
  LOAD_MORE_GUITARS_SUCCESS,
  SEARCH_GUITAR
} from '../actionTypes';
import R from 'ramda';

const initialState = {
  ids: [],
  search: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_GUITARS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload)
      });
    case LOAD_MORE_GUITARS_SUCCESS:
      const ids = R.pluck('id', payload);
      return R.merge(state, {
        ids: R.concat(ids, state.ids)      
      });
    case SEARCH_GUITAR:
      return R.merge(state, {
        search: payload      
      })    
    default:
      return state;
  }
}