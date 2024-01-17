import { Dispatch } from 'redux';
import { SET_ITEMS, SET_BRANDS, SetItemsAction } from "../types/redux/action.model";

export type ItemActionTypes = SetItemsAction;

export const setItems = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/items");
    const items = await response.json();
    dispatch({
      type: SET_ITEMS,
      payload: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

export const setBrands = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/brands");
    const items = await response.json();
    dispatch({
      type: SET_BRANDS,
      payload: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};