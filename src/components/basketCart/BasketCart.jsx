import React from 'react';
import {Link} from 'react-router';
import {getTotalBasketCount, getTotalBasketPrice} from '../../selectors';
import {connect} from 'react-redux';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './basket-cart.css';

const BasketCart = ({totalBasketCount, totalPrice}) => {
  return (
    <div className="cart">
        <Link className='basket-link' to='/basket'>
          <Button fluid basic color='black' className='basket-btn'>
            {totalBasketCount} item(s) - ${totalPrice}
          </Button>
        </Link>
    </div>
  )
}


const mapStateToProps = state => ({
  totalBasketCount: getTotalBasketCount(state),
  totalPrice: getTotalBasketPrice(state)
})

export default connect(mapStateToProps, null)(BasketCart);