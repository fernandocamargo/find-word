import normalize from 'helpers/string/normalize';
import border from 'helpers/matrix/border';

export default ({ previous, valid }, current) => ({
  previous: current,
  valid:
    valid &&
    border(previous)
      .map(normalize)
      .includes(normalize(current)),
});
