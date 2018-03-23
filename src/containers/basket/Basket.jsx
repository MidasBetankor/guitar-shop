import React from 'react';
import {connect} from 'react-redux';
import R from 'ramda';
import {
  getTotalBasketPrice,
  getBasketGuitarsWithCount
} from '../../selectors';
import {Link} from 'react-router';
import {
  removeGuitarFromBasket,
  cleanBasket,
  basketCheckout
} from '../../actions/actions';
import { Divider, Image, List, Button, Segment, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../../components/footer/Footer';
import './basket.css';


const Basket = ({
  guitars,
  totalPrice,
  removeGuitarFromBasket,
  cleanBasket,
  basketCheckout
}) => {
const isBasketEmpty = R.isEmpty(guitars);

const renderContent = () => (
  <div>
    {isBasketEmpty && <div>Your shopping cart is empty</div>}
    <Divider />
    <div>  
          {guitars.map((guitar, index) => {
            return(
              <Segment inverted key={index}>
                <List divided inverted relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header>Foto</List.Header>
                      <Image src={guitar.image} alt={guitar.name}/>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header>Guitar name</List.Header>
                      {guitar.name}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header>Coast</List.Header>
                      {guitar.price}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header>Count</List.Header>
                      {guitar.count}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                    <List.Header>Delete</List.Header>
                      <Button className='btn' color='grey' onClick={() => removeGuitarFromBasket(guitar.id)}>delete</Button>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            )
          })}
    </div>
  </div>
);

const renderSidebar = () => (
    <div className="basket_side">
      <Link to='/'>
        <Button className='btn'>Continue shopping &nbsp; <Icon name='shop'/></Button>
      </Link>
      {
        R.not(isBasketEmpty) &&
        <div className='basket_btns'>
          <Button className='btn' onClick={cleanBasket}>
            clear cart &nbsp; <Icon name='refresh'/>
          </Button>
          <Button className='btn' onClick={() => basketCheckout(guitars)}>
            checkout &nbsp; <Icon name='check circle'/>
          </Button>
        </div>
      }
    </div>
);

  return (
    <div className="basket">
      {
        R.not(isBasketEmpty) &&
        <div>
          <Segment className='total'>
            <h1>Total coast: ${totalPrice}</h1>
          </Segment>
        </div>
      }
      <div className="basket_row">
        <div>
          {renderContent()}
        </div>
        <div>
          {renderSidebar()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
    guitars: getBasketGuitarsWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  })

const mapDispatchToProps = {
  removeGuitarFromBasket,
  cleanBasket,
  basketCheckout
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);