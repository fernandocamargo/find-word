import decrease from 'helpers/number/decrease';
import increase from 'helpers/number/increase';

export default ({ indexes, size, index, letter }) => {
  const row = decrease(size) - Math.floor(index / size);
  const column = index - (size - increase(row)) * size;
  const indexed = indexes[letter];
  const coordinates = [[row, column]];

  return Object.assign(indexes, {
    [letter]: indexed ? indexed.concat(coordinates) : coordinates,
  });
};
