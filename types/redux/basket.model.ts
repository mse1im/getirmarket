export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface BasketState {
  items: CartItem[];
  total: number;
}

export interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: CartItem;
}

export interface IncreaseQuantityAction {
  type: "INCREASE_QUANTITY";
  payload: { name: string; price: number };
}

export interface DecreaseQuantityAction {
  type: "DECREASE_QUANTITY";
  payload: {
    quantity: number;
    name: string;
    price: number;
  };
}

export interface Count {
  name: string;
  price: number;
}
