import update from 'immutability-helper';

export const setSize = state => size =>
  update(state, {
    settings: {
      size: { $set: size },
    },
  });

export const setDiagonal = state => diagonal =>
  update(state, {
    settings: {
      diagonal: { $set: diagonal },
    },
  });

/*
export const setQuery = state => ({ query, occurrences }) =>
  update(state, {
    query: { $set: query },
    occurrences: { $set: occurrences },
  });
*/

export const setQuery = state => query =>
  update(state, {
    query: { $set: query },
  });

export const setMatrix = state => ({ matrix, indexes }) =>
  update(state, {
    matrix: { $set: matrix },
    indexes: { $set: indexes },
    query: { $set: '' },
    occurrences: { $set: [] },
  });

export const setLoading = state => loading =>
  update(state, {
    loading: { $set: loading },
  });
