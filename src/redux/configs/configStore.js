import { combineReducers, createStore } from 'redux';
import toDoReducer from '../modules/todoList';

const rootReducers = combineReducers({
  toDoReducer,
});

const store = createStore(rootReducers);

export default store;
