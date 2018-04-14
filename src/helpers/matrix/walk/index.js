import update from 'helpers/matrix/update';

export default (stack, paths = [[]]) => paths.reduce(update(stack), []);
