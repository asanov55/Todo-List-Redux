import { combineReducers } from 'redux';

import { counter } from './todos/todos-reducers';

export const rootReducer = combineReducers({
  counter,
});
