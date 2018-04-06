import { get } from "./api-client"

export default {
  getQuestions: () => {
    return get('posts')
  }
}
