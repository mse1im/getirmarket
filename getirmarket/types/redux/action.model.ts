export const SET_ITEMS = "SET_ITEMS";
export const SET_BRANDS = "SET_BRANDS";

export interface Item {
  tags: any;
  manufacturer: string;
  itemType: string;
  name: string;
  price: number;
  slug: string;
}

export interface Brands {
  manufacturer: string;
  itemType: string;
  name: string;
  price: number;
  slug: string;
}

export interface Count {
  name: string;
  price: number;
}

export interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: Item[];
}

export interface SetBrandsAction {
  type: typeof SET_BRANDS;
  payload: Brands[];
}

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: CartItem;
}

export interface IncreaseQuantityAction {
  type: 'INCREASE_QUANTITY';
  payload: { name: string; price: number };
}

export interface DecreaseQuantityAction {
  type: 'DECREASE_QUANTITY';
  payload: {
    quantity: number; name: string; price: number 
};
}
