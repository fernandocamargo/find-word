import normalize from 'helpers/string/normalize';

export default () =>
  normalize(
    Math.random()
      .toString(36)
      .replace(/[^A-Za-z]+/gi, ''),
  );
