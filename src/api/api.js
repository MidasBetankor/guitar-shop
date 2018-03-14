import guitars from './mockGuitars';
import categories from './mockCategories';
import R from 'ramda';

export const fetchGuitars = async () => {
  return new Promise (resolve => {
    resolve(guitars);
  })
} 

export const loadMoreGuitars = async ({offset}) => {
  return new Promise (resolve => {
    resolve(guitars);
  })
} 

export const fetchGuitarById = async id => {
  return new Promise((resolve, reject) => {
    const guitar = R.find(R.propEq('id', id), guitars);
    resolve(guitar);
  })
}

export const fetchCategories = async () => {
  return new Promise (resolve => {
    resolve(categories);
  })
}