// Redux
import { connect } from 'react-redux'

// components
import Posts from './components/Posts'

// actions
import {
  getQuestions,
} from '../../actions/stackoverflow'


const mapStateToProps = state => ({
    isFetching: state.post.isFetching,
    posts: state.post.items,
  })

const mapDispatchToProps = {
  getQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)