import * as matrix from 'helpers/matrix';

export const changeSize = ({ setSize }) => ({ target: { value } }) =>
  setSize(+value);

export const changeDiagonal = ({ setDiagonal }) => ({ target: { checked } }) =>
  setDiagonal(checked);

export const submitSettings = ({ settings: { size }, setMatrix }) => event => {
  event.preventDefault();

  setMatrix(matrix.create(size));
};

export const changeQuery = ({ setQuery }) => ({ target: { value: query } }) =>
  setQuery(query);

export const submitSearch = ({ setLoading, query, indexes }) => event => {
  event.preventDefault();

  setLoading(true);
  Promise.resolve(matrix.search(query).at(indexes)).then(ocurrences => {
    setLoading(false);
    console.log('submitSearch();', { query, ocurrences });
  });
};
