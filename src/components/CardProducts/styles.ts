import styled from 'styled-components'

export const Container = styled.div`
  background-color: #2a2a2a;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow: hidden;

  img {
    width: 100%;
  }

  h1 {
    color: #fff;
    margin-top: 32px;
  }

  p {
    color: #fff;
    font-weight: 300;
  }

  span {
    font-weight: 700;
    font-size: 24px;
    color: #fff;
  }

  button {
    border: none;
    background-color: yellow;
    height: 44px;
    padding: 0 32px;
    border-radius: 25px;

    font-size: 16px;
    font-weight: 700;
    margin-top: 16px;
  }
`