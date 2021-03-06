import {
  FETCH_GUITARS_START,
  FETCH_GUITARS_SUCCESS,
  FETCH_GUITARS_FAILURE,
  LOAD_MORE_GUITARS_START,
  LOAD_MORE_GUITARS_SUCCESS,
  LOAD_MORE_GUITARS_FAILURE,
  FETCH_GUITAR_BY_ID_START,
  FETCH_GUITAR_BY_ID_SUCCESS,
  FETCH_GUITAR_BY_ID_FAILURE,
  ADD_GUITAR_TO_BASKET,
  SEARCH_GUITAR,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  REMOVE_GUITAR_FROM_BASKET,
  CLEAN_BASKET
} from '../actionTypes';
import {getRenderedGuitarsLength} from '../selectors';
import {
  fetchGuitars as fetchGuitarsApi,
  loadMoreGuitars as loadMoreGuitarsApi,
  fetchGuitarById as fetchGuitarByIdApi,
  fetchCategories as fetchCategoriesApi
} from '../api/api';

export const fetchGuitars = () => async dispatch => {
  dispatch({type: FETCH_GUITARS_START});
  try {
     const guitars = await fetchGuitarsApi();
     dispatch({
       type: FETCH_GUITARS_SUCCESS,
       payload: guitars
      });
  } catch (err) {
    dispatch({
      type: FETCH_GUITARS_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const loadMoreGuitars = () => async (dispatch, getState) => {
  const offset = getRenderedGuitarsLength(getState());
  dispatch({type: LOAD_MORE_GUITARS_START});
  try {
     const guitars = await loadMoreGuitarsApi({offset});
     dispatch({
       type: LOAD_MORE_GUITARS_SUCCESS,
       payload: guitars
      });
  } catch (err) {
    dispatch({
      type: LOAD_MORE_GUITARS_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const fetchGuitarById = id => async dispatch => {
  dispatch({type: FETCH_GUITAR_BY_ID_START});

  try {
    const guitar = await fetchGuitarByIdApi(id);
    dispatch({
      type: FETCH_GUITAR_BY_ID_SUCCESS,
      payload: guitar
    })
  } catch (err) {
    dispatch({
      type: FETCH_GUITAR_BY_ID_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const addGuitarToBasket = id => dispatch => {
  dispatch({
    type: ADD_GUITAR_TO_BASKET,
    payload: id
  })
}

export const searchGuitar = text => dispatch => {
  dispatch({
    type: SEARCH_GUITAR,
    payload: text
  })
}

export const fetchCategories = () => async dispatch => {
  dispatch({type: FETCH_CATEGORIES_START});
  try {
     const categories = await fetchCategoriesApi();
     dispatch({
       type: FETCH_CATEGORIES_SUCCESS,
       payload: categories
      });
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const removeGuitarFromBasket = id => dispatch => {
  dispatch({
    type: REMOVE_GUITAR_FROM_BASKET,
    payload: id
  })
}

export const cleanBasket = () => dispatch => {
  dispatch({
    type: CLEAN_BASKET
  })
}

export const basketCheckout = guitars => () => {
  alert(JSON.stringify(guitars))
}
