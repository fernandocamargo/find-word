export default ({ matrix, size, index, letter }) => {
  const [head, ...tail] = matrix;

  switch (true) {
    case !index:
      return [[letter]];
    case index % size === 0:
      return [[letter], head, ...tail];
    default:
      return [head.concat(letter), ...tail];
  }
};

