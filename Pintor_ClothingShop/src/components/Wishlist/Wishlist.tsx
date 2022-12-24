import { useContext } from "react";
import { ShopContext } from "../Context/useContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";

export const Wishlist = () => {
  const { wish } = useContext(ShopContext);
  return (
    <>
      <Title><center> Your Wishlist Items</center></Title>
      <ProductsWrapper>
        {wish.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
