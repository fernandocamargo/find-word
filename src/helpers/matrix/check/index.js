import unique from 'helpers/collection/unique';
import normalize from 'helpers/string/normalize';
import head from 'helpers/collection/head';
import tail from 'helpers/collection/tail';
import validate from 'helpers/matrix/validate';

export default paths => {
  const balanced = paths.length === unique(paths.map(normalize)).length;
  const stats = { previous: head(paths), valid: true };

  return balanced && tail(paths).reduce(validate, stats).valid;
};
