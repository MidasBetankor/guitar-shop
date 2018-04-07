import React, { Component } from 'react';

import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';

import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='head'>
        <h1 className='title'>Beautiful guitars</h1>
        
        <Link to={`/posts`}>
          <Button className='btn'>
            Posts
          </Button>  
        </Link>
      </div>
    )
  }
}

