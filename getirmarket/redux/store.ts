import { createStore, combineReducers } from 'redux';
import { itemReducer } from './reducers';

const rootReducer = combineReducers({
  item: itemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);