import concat from 'helpers/collection/concat';

export default previous => (stack, coordinates) => {
  const first = !previous.length;
  const next = [coordinates];

  return stack.concat(first ? [next] : previous.map(concat(next)));
};
