import random from 'helpers/string/random';
import concat from 'helpers/matrix/concat';
import catalogue from 'helpers/matrix/catalogue';

export default size => (stack, value, index) => {
  const letter = random()
    .split('')
    .shift();
  const context = { size, index, letter, ...stack };

  return {
    matrix: concat(context),
    indexes: catalogue(context),
  };
};
