import { Product } from "../../models";

export type ShopState = {
    wish: Product[];
    products: Product[],
    total: number,
    totalitems: number,
    addToCart: any,
    removeItem: any,
    addToWishlist: any,
    removeToWishlist:any,
    updatePrice: any,
    updateqty: any,
   
}

export const initialState = {
    wish: [],
    products: [],
    total: 0,
    totalitems: 0,
    addToCart: null,
    removeItem: null,
    addToWishlist: null,
    removeToWishlist:null,
    updatePrice: null,
    updateqty: null,
}