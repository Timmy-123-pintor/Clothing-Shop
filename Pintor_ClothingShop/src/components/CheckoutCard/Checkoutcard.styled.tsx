import styled from 'styled-components';

type WrapperProps = {
    background: string;
  };



export const Wrapper = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  margin-top: 20px;
  margin-left: 55px;
`;

export const ImgWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  width: 450px;
  height: 260px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(52, 53, 99, 0.2),  0 0 1px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 100%;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  margin: 10px;
`;




export const TextContainer = styled.div`
  display: block;
  gap: 10px;
  width: 400px;
  
`;

export const Title = styled.p`
  display: flexbox;
  font-weight: bolder;
  font-style: normal;
  font-size: 40px;
  color: #00000;
  margin-bottom: 180px;
  margin-left: 50px;
`;

export const SubTitle = styled.p`
  font-weight: normal;
  font-size: 25px;
  color: #00000;
  margin-right: 180px;
  margin-bottom: 50px;
`;



