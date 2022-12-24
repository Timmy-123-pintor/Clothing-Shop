import { WishlistButton,AddButtonProps,SubTitle,TextContainer,Title,Wrapper} from './ProductCard.styled';
import { Product } from '../../models';
import { useState, useEffect, useContext } from 'react';
import { ShopContext} from '../Context/useContext';

export const ProductCard = ({ name, imageUrl, price,quantity }: Product) => {
  const {products, wish,removeItem,addToCart,removeToWishlist,addToWishlist} = useContext(ShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  useEffect(() => {
    const cartItems = products.find((product: { name: string; }) => product.name === name);
    const wishItems = wish.find((product: { name: string; }) => product.name === name);

    if (cartItems && wishItems) {
      setIsInCart(true);
      setIsInWishlist(true);
    }else if(!cartItems && wishItems){
      setIsInCart(false);
      setIsInWishlist(true);
    }else if(cartItems && !wishItems){
      setIsInCart(true);
      setIsInWishlist(false);
    }else {
      setIsInCart(false);
      setIsInWishlist(false);
    }
  }, [products, wish,name]);
  
  const handleCart = () => {
    const product = {name, imageUrl, price, quantity};
    if(isInCart){
      removeItem(product);
     
    } else{
      addToCart(product);
      
    }
  }

  const handleWish = () => {
    const product = {name, imageUrl, price, quantity};
    if(isInWishlist){
      removeToWishlist(product);
    
    } else{
      addToWishlist(product);
     
    }
  }

  return (
    <Wrapper background={imageUrl}>
      <WishlistButton isInWish={isInWishlist} onClick={handleWish}>
        <p>{isInWishlist?  "♥" : "♥"}</p>
      </WishlistButton>

      <AddButtonProps isInCart={isInCart} onClick={handleCart}>
        <p>{isInCart?  "-" : "+"}</p>
      </AddButtonProps>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>${price}.00</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};


