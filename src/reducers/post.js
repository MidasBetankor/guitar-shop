import { handleActions } from "redux-actions"

import actions from "../actions/post"

export const initialState = {
  isFetching: false,
  error: "",
  items: []
}

export default handleActions(
  {
    [actions.post.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
      error: "",
      items: []
    }),

    [actions.post.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items
    }),

    [actions.post.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error
    })
  },
  initialState
)
