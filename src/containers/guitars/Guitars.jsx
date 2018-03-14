import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

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
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
        <div className="thumbnail">
          <img
            className="img-thumbnail"
            src={guitar.image}
            alt={guitar.name}
          />
          <div className="caption">
            <h4 className="pull-right">${guitar.price}</h4>
            <h4>
              <Link to={`/guitars/${guitar.id}`}>
                {guitar.name}
              </Link>
              <p>{shortDescription}</p>
              <p className="itemButton">
                <button
                  className="btn btn-primary"
                  onClick={() => addGuitarToBasket(guitar.id)}
                >
                  Buy now
                </button>
                <Link
                  to={`/guitars/${guitar.id}`}
                  className="btn btn-default"
                >
                  More info
                </Link>
              </p>
            </h4>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {guitars, loadMoreGuitars} = this.props;
    return (
      <div>
        <div className="books row">
          {guitars.map((guitar, index) => this.renderGuitar(guitar, index))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              onClick={loadMoreGuitars}
              className="pull-right btn btn-primary"
            >
              Load more
            </button>
          </div>
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
