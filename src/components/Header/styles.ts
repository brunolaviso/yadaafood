import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: #131313;
  height: 140px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: red;
      font-style: italic;
      font-weight: 900;

      cursor: pointer;

      span {
        color: #ffffff;
        font-weight: 400;
      }
    }

    nav {
      display: flex;
      gap: 32px;

      a {
        color: #f6f6f6;
        text-decoration: none;
      }
    }
  }

`
