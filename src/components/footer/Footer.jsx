import React, { Component } from 'react';
import { Icon, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './footer.css';

export default class Footer extends Component {
  render () {
    return (
      <Container textAlign='center' className='foot'>
        <p>
          <Icon name='copyright'/>2018. Alex_Sandok
        </p>
      </Container>
    )
  }
}
