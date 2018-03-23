import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';
import { Card, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {
  fetchGuitars,
  loadMoreGuitars,
  addGuitarToBasket,
  fetchCategories
} from '../../actions/actions';
import {getGuitars} from '../../selectors';

import './guitars.css';

class Guitars extends Component {
  componentDidMount() {
    this.props.fetchGuitars();
    this.props.fetchCategories();
  }

  renderGuitar (guitar, index){
    const {addGuitarToBasket} = this.props;
    const shortDescription = `${R.take(60, guitar.description)}...`;
    return (
      <Card raised className="guitar" key={index}>
        <div className="thumbnail">
          <img src={guitar.image} alt={guitar.name} />
          <div className="caption">
            <h4>${guitar.price}</h4>
            <h4>
              <Link to={`/guitars/${guitar.id}`}>
                {guitar.name}
              </Link>
              <p>{shortDescription}</p>
              <p className="item_button">
                <Button className='btn' onClick={() => addGuitarToBasket(guitar.id)}>
                  Buy now &nbsp; <Icon name='shop'/>
                </Button>
                <Link to={`/guitars/${guitar.id}`}>
                  <Button className='btn'>
                    More info &nbsp; <Icon name='idea'/>
                  </Button>  
                </Link>
              </p>
            </h4>
          </div>
        </div>
      </Card>
    )
  }

  render() {
    const {guitars, loadMoreGuitars} = this.props;
    return (
      <div className='guitars-block'>
        <Card.Group className="guitars">
          {guitars.map((guitar, index) => this.renderGuitar(guitar, index))}
        </Card.Group>
        <div className="btn-more">
          <Button className='btn' onClick={loadMoreGuitars}>
            Load more &nbsp; <Icon name='external share'/>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    guitars: getGuitars(state, ownProps)
  }
}

const mapDispatchToProps = {
  fetchGuitars,
  loadMoreGuitars,
  addGuitarToBasket,
  fetchCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Guitars);
