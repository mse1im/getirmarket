import { Item, SET_ITEMS, SetItemsAction } from '../types/redux/action.model';

export type ItemActionTypes = SetItemsAction;

export const setItems = (items: Item[]): ItemActionTypes => ({
  type: SET_ITEMS,
  payload: items,
});