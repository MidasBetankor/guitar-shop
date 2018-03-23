import React from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router';
import {compose} from 'redux';
import classNames from 'classnames';
import R from 'ramda';

import {getCategories, getActiveCategoryId} from '../../selectors';

import './categories.css';
import { Button } from 'semantic-ui-react';

const Categories = ({categories, activeCategoryId}) => {
  const renderCategory = (category, index) => {
    const getActiveState = R.propEq('id', activeCategoryId)
    const linkClass = classNames({
      'list-group-item': true,
      'active': getActiveState(category)
    })
    return (
      <Link
        to={`/categories/${category.id}`}
        className={linkClass}
        key={index}
      >
        <Button className='btn' fluid>
          {category.name}
        </Button>
      </Link>
    )
  }

  const renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      'active': R.isNil(activeCategoryId)
    })
    return (
      <Link
        to="/"
        className={linkClass}
      >
        <Button className='btn' fluid>
          All
        </Button>
      </Link>
    )
  }

  return (
    <div>
      <h4>Brand</h4>
      <div className='all'>
        {renderAllCategory()}
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps)
})

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories);
