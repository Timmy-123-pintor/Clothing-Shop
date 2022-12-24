import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex;
  width: 240px;
  height: 40;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;
export const MinusButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  background: #E55336;
  border: none;
  padding: 5px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 1s;
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }



  p {
    font-size: 25px;
    margin: 0;
    color: black;
  }
`;

export const QuantityText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  margin-left: 50px;
  background: ;
  padding: 5px;
  border-radius:: 20px;
  cursor: pointer;
  

  p {
    font-size: 20px;
    margin: 0;
    color: black;
  }
`;

export const AddButton = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 120px;
background: #60c95d;
border: none;
padding: 5px;
cursor: pointer;

:hover {
  transform: scale(1.2);
  transition: 1s;
}

p {
  font-size: 25px;
  margin: 0;
  color: black;
}
`;

export const Qlabel = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: left;

  padding: 5px;
  cursor: pointer;

  p {
    font-size: 15;
    margin: 0;
    color: black;
    
  }
`;
