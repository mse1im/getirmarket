import { Dispatch } from 'redux';
import { SET_ITEMS, SetItemsAction } from "../types/redux/action.model";
import { SET_BRANDS } from '@/types/redux/brand.model';

export type ItemActionTypes = SetItemsAction;

export const addToCart = (item: any) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const increaseQuantity = (name: string, price: number) => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: { name, price },
  };
};

export const decreaseQuantity = (name: string, price: number) => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: { name, price },
  };
};

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