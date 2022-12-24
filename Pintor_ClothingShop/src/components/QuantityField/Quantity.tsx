import { useContext, useEffect, useReducer, useState } from "react";
import { Product } from "../../models";
import {AddButton,QuantityText,Wrapper,MinusButton} from "./Quantity.styled";

import { ShopContext } from "../Context/useContext";

export const Quantity = ({ name, imageUrl, price, quantity }: Product) => {
  const { updateqty } = useContext(ShopContext);

  const [qntty, setQuantity] = useState(quantity);

  useEffect(() => {
    updateqty({ name, imageUrl, price }, qntty);
  }, [qntty]);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSub = () => {
    if (qntty > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
    
     <Wrapper> 
      <MinusButton onClick={handleSub}>
        <p>-</p>
      </MinusButton>
      <AddButton onClick={handleAdd}>
        <p>+</p>
      </AddButton>
    </Wrapper>
      <QuantityText>
        <p>Quantity:{quantity}</p>
      </QuantityText>
   
    </>
  );
};
