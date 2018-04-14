// import normalize from 'helpers/string/normalize';

export default () => ({});
/*
export default ({ matrix, occurrences }) => ({
  matrix: matrix.map((columns, row) =>
    columns.map((letter, column) => ({
      occurrences: occurrences.reduce((stack, paths, index) => {
        const x = paths.map(normalize).includes(normalize([row, column]));
        return x ? stack.concat(index) : stack;
      }, []),
      letter,
    })),
  ),
});
*/
