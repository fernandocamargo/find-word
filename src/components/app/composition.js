import { compose, withStateHandlers, withHandlers, withProps } from 'recompose';

import state from './initial-state';
import * as reducers from './reducers';
import * as handlers from './handlers';
import props from './props';

export default compose(
  withStateHandlers(state, reducers),
  withHandlers(handlers),
  withProps(props),
);
