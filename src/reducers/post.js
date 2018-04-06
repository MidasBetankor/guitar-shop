import { handleActions } from "redux-actions"

import actions from "../actions/stackoverflow"

export const initialState = {
  isFetching: false,
  error: "",
  items: []
}

export default handleActions(
  {
    [actions.stackoverflow.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
      error: "",
      items: []
    }),

    [actions.stackoverflow.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items
    }),

    [actions.stackoverflow.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error
    })
  },
  initialState
)
