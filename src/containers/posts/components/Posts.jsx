// React
import React, { Component } from 'react';

// Components
import Post from './Post'

// styles
import '../css/index.css'

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render () {
    const { posts, isFetching } = this.props

    return (
      <table className={'list'}>
        {
          posts.map((item, index) => (
            <Post
              key={index}
              post={item}
            />
          ))
        }
      </table>
    )
  }
}

export default Posts