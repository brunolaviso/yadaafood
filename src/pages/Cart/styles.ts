import styled from "styled-components";

export const CartBox = styled.div`
  width: 100%;
  background-color: #131313;
  border-radius: 32px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const Product = styled.div`
  width: 100%;
  height: 150px;
  background-color: #1b1b1b;
  border-radius: 16px;
  padding: 16px;
  
  display: flex;
  align-items: center;
  gap: 32px;

  .img {
    overflow: hidden;
    height: 100%;
    border-radius: 16px;
    aspect-ratio: 1/1;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
    }
  }

  .info {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .description {

    }

    .quantity {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        > button {
          width: 24px;
          height: 24px;
          
          background-color: white;
          border: none;
          border-radius: 100%;
        }
      }
    }
  }
`

export const CartTotal = styled.div`
  width: 100%;
  font-size: 32px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price {
    font-weight: bold;
  }
`