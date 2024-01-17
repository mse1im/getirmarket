export const SET_ITEMS = "SET_ITEMS";

export interface Item {
  manufacturer: string;
  itemType: string;
  name: string;
  price: number;
  slug: string;
}

export interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: Item[];
}
