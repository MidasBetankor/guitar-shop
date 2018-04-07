// Redux
import { connect } from 'react-redux'

// components
import Posts from './components/Posts'

// actions
import {
  getPosts,
} from '../../actions/post'


const mapStateToProps = state => ({
    isFetching: state.post.isFetching,
    posts: state.post.items,
  })

const mapDispatchToProps = {
  getPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)