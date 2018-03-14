import R from 'ramda';

export const getGuitarById = (state, id) => R.prop(id, state.guitars);

export const getActiveCategoryId = ownProps => R.path(['params', 'id'], ownProps);

export const getGuitars = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps);
  const applySearch = item => R.contains(
    state.guitarsPage.search,
    R.prop('name', item)
  )

  const applyCategory = item => R.equals(
    activeCategoryId,
    R.prop('categoryId', item)
  )

  const guitars = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getGuitarById(state, id))
  )(state.guitarsPage.ids)


  return guitars;
};

export const getRenderedGuitarsLength = state => R.length(state.guitarsPage.ids);

export const getTotalBasketCount = state => R.length(state.basket);

export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getGuitarById( state, id))
  )(state.basket);

  return totalPrice;
}

export const getCategories = state => R.values(state.categories);

export const getBasketGuitarsWithCount = state => {
  const uniqueIds = R.uniq(state.basket);
  const guitarCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basket)
  const guitarWithCount = guitar => R.assoc('count', guitarCount(guitar.id), guitar)
  const guitars = R.compose(
    R.map(guitarWithCount),
    R.map(id => getGuitarById(state, id))
  )(uniqueIds);
  return guitars;
}
