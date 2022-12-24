import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";
import { Cart } from "../Cart";
import { Products } from "../Products";
import { ShopContext } from "../Context/useContext";
import { useReducer } from "react";
import {add,addQtty,erase,initialState,remove, wished ,shopReducer,totalItems,update,} from "../Reducer";
import { Product } from "../../models";
import { Wishlist } from "../Wishlist";
import { Checkout } from "../Checkout";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch(add(updatedCart));
  };

  const removeItem = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(remove(updatedCart));


  };

  const updatePrice = (products: [] = []) => {
    let total = 0;
    let items = 0;
    products.forEach(
      (product: { price: number; quantity: number }) =>
        (total = total + product.price * product.quantity , items = items + product.quantity)
    );

    dispatch(update(total));
    dispatch(totalItems(items));
  };

  const addToWishlist = (product: Product) => {
    const updatedCart = state.wish.concat(product);
    dispatch(wished(updatedCart));
  };

  const removeToWishlist = (product: Product) => {
    const updatedCart = state.wish.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );

    dispatch(erase(updatedCart));
  };

  const updateqty = (product: Product, quantity: number) => {
    const updatedCart = state.products.map((items: { name: string }) =>
      items.name === product.name ? { ...items, quantity: quantity } : items
    );
    dispatch(addQtty(updatedCart));

    updatePrice(updatedCart);
  };

  const value = {
    totalitems: state.totalitems ,
    total: state.total,
    products: state.products,
    wish: state.wish,
    addToCart,
    removeItem,
    addToWishlist,
    removeToWishlist,
    updatePrice,
    updateqty,
  };
  return (
    <ShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1><center>Clothing Shop Starter Project</center></h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/checkout">Checkout</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Wrapper>
    </ShopContext.Provider>
  );
};