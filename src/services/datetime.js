export default {
  getFormattedDate(secs) {
    const monthShortNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]

    const date = new Date(+(secs.toString() + "000"))
    const today = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${date.getDate()} ${monthShortNames[
      date.getMonth()
    ]}, ${date.getFullYear()} ${hours < 10 ? "0" + hours : hours}:${minutes < 10
      ? "0" + minutes
      : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
  }
}
