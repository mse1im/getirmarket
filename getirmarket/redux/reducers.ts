import { SET_ITEMS, SET_BRANDS, Item, Brands } from '../types/redux/action.model';
import { AnyAction } from 'redux';
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

export const itemReducer = (state: ItemState = initialState, action: AnyAction): ItemState => {
  if (action.type === SET_ITEMS && Array.isArray(action.payload)) {
    return {
      ...state,
      items: action.payload as Item[],
    };
  } else {
    return state;
  }
};

export const brandReducer = (state: BrandState = initialBrandState, action: AnyAction): BrandState => {
  if (action.type === SET_BRANDS && Array.isArray(action.payload)) {
    return {
      ...state,
      brands: action.payload as Brands[],
    };
  } else {
    return state;
  }
};