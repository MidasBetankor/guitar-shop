import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';
import BasketCart from '../../components/basketCart/BasketCart';
import Footer from '../../components/footer/Footer';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {
  fetchGuitarById,
  addGuitarToBasket
} from '../../actions/actions';
import {getGuitarById} from '../../selectors'; 

import './guitar.css';

class Guitar extends Component {
  componentDidMount() {
    this.props.fetchGuitarById(this.props.params.id)
  };

  renderFields () {
    const {guitar} = this.props;
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        'mensura',
        'strings',
        'housing',
        'color',
        'frets',
        'pickups',
        'fretboard'
      ])
      
    )(guitar)
    
    return columnFields.map(([key, value]) => (
      <ol key={key}>
        <li className='list_item'>
          <h3>{key}</h3>
          <p>{value}</p>
        </li>
      </ol>
    ))
  }

  renderContent () {
    const {guitar} = this.props;
    return (
      <div className='guitar_content'>
        <div className='guitar_row'>
          <div>
            <img src={guitar.image} alt={guitar.name}/>
          </div>
          <div className='fields'>
            {this.renderFields()}
          </div>
        </div>
        <div className='guitar_info'>
          <div className='name_and_price'>
            <h4>{guitar.name}</h4>
            <h4>${guitar.price}</h4>
          </div>
          <p>{guitar.description}</p>
        </div>
      </div>
    )
  }

  renderSidebar () {
    const {guitar, addGuitarToBasket} = this.props;
    return (
      <div className='aside'>
        <div className='quick_shop'>
          <h3 className='quick'>Quick shop</h3>
          <BasketCart />
        </div>
        <div className='btn-grp'>
          <Link to='/'>
            <Button className='btn'fluid>Back to store &nbsp; <Icon name='arrow left'/></Button>
          </Link>
          <Button className='btn' fluid onClick={() => addGuitarToBasket(guitar.id)}>
            Add to cart &nbsp; <Icon name='shop'/>
          </Button>
        </div>
      </div>
    )
  }

  render() {
    const {guitar} = this.props;
    return (
      <div className='info'>
        <div className='main_content'>
          <div className='render_content'>
            {guitar && this.renderContent()}
          </div>
          <div className='render_sidebar'>
            {guitar && this.renderSidebar()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchGuitarById,
  addGuitarToBasket
}

const mapStateToProps = state => ({
  guitar: getGuitarById(state, state.guitarPage.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(Guitar);