import times from 'helpers/collection/times';
import fill from 'helpers/matrix/fill';

export default size =>
  times(size * size).reduce(fill(size), { matrix: [], indexes: {} });
