import { Dispatch } from "redux";
import { SET_ITEMS, SetItemsAction } from "../types/redux/action.model";
import { SET_BRANDS } from "@/types/redux/brand.model";

export type ItemActionTypes = SetItemsAction;

export const addToCart = (item: any) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const increaseQuantity = (name: string, price: number) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: { name, price },
  };
};

export const decreaseQuantity = (name: string, price: number) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: { name, price },
  };
};

export const setItems = () => async (dispatch: Dispatch) => {
  try {
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001/items"
        : "https://raw.githubusercontent.com/mse1im/getirmarket/main/layout/json/items.json";

    const response = await fetch(apiUrl);
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
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001/brands"
        : "https://raw.githubusercontent.com/mse1im/getirmarket/main/layout/json/companies.json";

    const response = await fetch(apiUrl);
    const items = await response.json();
    dispatch({
      type: SET_BRANDS,
      payload: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};