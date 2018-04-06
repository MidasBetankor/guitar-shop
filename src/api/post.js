import { get } from "./api-client"

export default {
  getPosts: () => {
    return get('posts')
  }
}
