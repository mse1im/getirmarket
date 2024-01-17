import { BasketState } from "@/types/redux/basket.model";
import { BrandState, SET_BRANDS, Brands } from "@/types/redux/brand.model";
import {
    SET_ITEMS,
    Item,
    ItemState,
  } from "../types/redux/action.model";
  import { AnyAction } from "redux";
  
  const initialState: ItemState = {
    items: [],
  };
  
  const initialBrandState: BrandState = {
    brands: [],
  };
  
  const initialBasketState: BasketState = {
    items: [],
    total: 0,
  };
  
  export const itemReducer = (
    state: ItemState = initialState,
    action: AnyAction
  ): ItemState => {
    if (action.type === SET_ITEMS && Array.isArray(action.payload)) {
      return {
        ...state,
        items: action.payload as Item[],
      };
    } else {
      return state;
    }
  };
  
  export const brandReducer = (
    state: BrandState = initialBrandState,
    action: AnyAction
  ): BrandState => {
    if (action.type === SET_BRANDS && Array.isArray(action.payload)) {
      return {
        ...state,
        brands: action.payload as Brands[],
      };
    } else {
      return state;
    }
  };
  
  export const cartReducer = (
    state: BasketState = initialBasketState,
    action: any
  ): BasketState => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItem = state.items.find(
          (item) => item.name === action.payload.name
        );
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.name === action.payload.name
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + action.payload.price,
          };
        } else {
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }],
            total: state.total + action.payload.price,
          };
        }
  
      case "INCREASE_QUANTITY":
        return {
          ...state,
          items: state.items.map((item) =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
  
      case "DECREASE_QUANTITY":
        const itemToDecrease = state.items.find(
          (item) => item.name === action.payload.name
        );
        if (itemToDecrease) {
          const newTotal = state.total - itemToDecrease.price;
          if (itemToDecrease.quantity === 1) {
            return {
              ...state,
              items: state.items.filter(
                (item) => item.name !== action.payload.name
              ),
              total: newTotal,
            };
          } else {
            return {
              ...state,
              items: state.items.map((item) =>
                item.name === action.payload.name
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
              total: newTotal,
            };
          }
        }
      default:
        return state;
    }
  };
  