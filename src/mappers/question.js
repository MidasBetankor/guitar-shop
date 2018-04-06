import datetimeService from "../services/datetime"

export default item => {
  return {
    id: item.id,
    userId: item.userId,
    title: item.title,
    body: item.body,
  }
}