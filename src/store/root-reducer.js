import { combineReducers } from 'redux';

import { counter } from './todos/todos-reducers';
import { filters } from './filters/filters-reducer';

export const rootReducer = combineReducers({
  counter,
  filters,
});
