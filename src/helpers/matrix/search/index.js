import normalize from 'helpers/string/normalize';
import get from 'helpers/object/get';
import walk from 'helpers/matrix/walk';
import check from 'helpers/matrix/check';

export default query => ({
  at: indexes => ({
    occurrences: normalize(query)
      .split('')
      .map(get(indexes))
      .reduce(walk, [])
      .filter(check),
    query,
  }),
});
