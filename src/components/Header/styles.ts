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
      color: #f6f6f6;

      span {
        color: red;
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
