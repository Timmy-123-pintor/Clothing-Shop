import {ImgWrapper,SubTitle,TextContainer,Title,Wrapper,} from './Checkoutcard.styled';
  
  import { Product } from '../../models';
  import { useContext } from 'react';
  import { ShopContext} from '../Context/useContext';
  
  export const CheckoutCard = ({ name, imageUrl, price,quantity }: Product) => {
    const {products} = useContext(ShopContext);
 
    return (
      <Wrapper>
        <ImgWrapper background={imageUrl}>
        </ImgWrapper>
        <TextContainer>
          <Title>{name}</Title> 
          <SubTitle><center>Quantity: {quantity}</center></SubTitle> 
        </TextContainer>
        
      </Wrapper>
    );
  };
  
  
  