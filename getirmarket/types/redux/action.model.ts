export const SET_ITEMS = "SET_ITEMS";
export const SET_BRANDS = "SET_BRANDS";

export interface Item {
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

export interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: Item[];
}

export interface SetBrandsAction {
  type: typeof SET_BRANDS;
  payload: Brands[];
}
