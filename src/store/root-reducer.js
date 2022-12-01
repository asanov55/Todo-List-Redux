import { combineReducers } from 'redux';

import { todos } from './todos/todos-reducers';
// import { filters } from './filters/filters-reducer';

export const rootReducer = combineReducers({
  todos,
  // filters,
});
