import {
  SET_ITEMS,
  SET_BRANDS,
  Item,
  Brands,
  CartState,
} from "../types/redux/action.model";
import { AnyAction } from "redux";
interface ItemState {
  items: Item[];
}
interface BrandState {
  brands: Brands[];
}

const initialState: ItemState = {
  items: [],
};

const initialBrandState: BrandState = {
  brands: [],
};

const initialBasketState: CartState = {
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

export const cartReducer = (state = initialBasketState, action: AnyAction) => {
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
        if (itemToDecrease.quantity === 1) {
          return {
            ...state,
            items: state.items.filter(
              (item) => item.name !== action.payload.name
            ),
            total: state.total - itemToDecrease.price,
          };
        } else {
          return {
            ...state,
            items: state.items.map((item) =>
              item.name === action.payload.name
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            total: state.total - itemToDecrease.price,
          };
        }
      }
    default:
      return state;
  }
};
