// React
import React, { Component } from 'react'

export default class Post extends Component {
  render () {
    const { post } = this.props

    return (
      <tr>
        <td>
          {post.title}
        </td>
        <td>
          {post.body}
        </td>
      </tr>
    )
  }
}