import { createActions } from "redux-actions"
// import i18n from "../i18n"

import api from "../api/post"
import postMapper from "../mappers/post"

const actions = createActions({
  post: {
    request: x => x,
    success: x => x,
    error: x => x
  }
})

export default actions

export const getPosts = () => async dispatch => {
  dispatch(actions.post.request())

  try {
    const result = await api.getPosts()
    console.log('result', result)

    dispatch(
      actions.post.success({ items: result.map(postMapper) })
    )
  } catch (e) {
    // dispatch(
      // actions.post.error({ error: i18n.t("post:error") })
    // )
  }
}
