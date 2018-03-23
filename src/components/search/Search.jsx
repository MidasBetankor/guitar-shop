import React, { Component } from 'react';
import {connect} from 'react-redux';
import  { Button, Input, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {
  searchGuitar, 
  fetchGuitars
} from '../../actions/actions';

import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.state === '') {
      return fetchGuitars();
    } else {
      this.props.searchGuitar(this.state.value);
    }
  }

  render() {
    return (
      <div className='search'>
        <h3>Quick shop</h3>
        <div className='search-form'>
          <form onSubmit={this.handleSubmit}>
            <Input 
              onChange={this.handleChange}
            /> 
          </form>
          <Button className='btn'>
            <Icon name='search'/>
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = ({
  searchGuitar
})

export default connect(null, mapDispatchToProps)(Search);