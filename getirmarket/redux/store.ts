import { configureStore } from '@reduxjs/toolkit';
import { brandReducer, itemReducer } from './reducers';

export const store = configureStore({
  reducer: {
    item: itemReducer,
    brands: brandReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
