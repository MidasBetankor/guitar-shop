import { createActions } from "redux-actions"
// import i18n from "../i18n"

import api from "../api/stackoverflow"
import questionMapper from "../mappers/question"

const actions = createActions({
  stackoverflow: {
    request: x => x,
    success: x => x,
    error: x => x
  }
})

export default actions

export const getQuestions = () => async dispatch => {
  dispatch(actions.stackoverflow.request())

  try {
    const result = await api.getQuestions()
    console.log('result', result)

    dispatch(
      actions.stackoverflow.success({ items: result.map(questionMapper) })
    )
  } catch (e) {
    // dispatch(
      // actions.stackoverflow.error({ error: i18n.t("stackoverflow:error") })
    // )
  }
}
