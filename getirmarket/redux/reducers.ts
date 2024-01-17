import { ItemActionTypes, Item } from './actions';
import { SET_ITEMS } from '../types/redux/action.model';

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

export const itemReducer = (state = initialState, action: ItemActionTypes): ItemState => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};