export const SET_BRANDS = "SET_BRANDS";

export interface Brands {
  manufacturer: string;
  itemType: string;
  name: string;
  price: number;
  slug: string;
}

export interface BrandState {
  brands: Brands[];
}

export interface SetBrandsAction {
  type: typeof SET_BRANDS;
  payload: Brands[];
}