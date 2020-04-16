import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div {
      margin-top: 10px;
    }

    input {
      background: ${lighten(0.01, '#ee4162')};
      width: 100%;
      border: 0;
      border-radius: 4px;
      height: 54px;
      padding: 0 25px;
      font-size: 18px;
      color: #ffffff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    span {
      color: #aaa;
      align-self: flex-start;
      margin: 25px 0;
      font-weight: bold;
      font-size: 20px;
      color: #00cfb4;
    }

    span:first-child {
      margin-top: 0;
    }

    button {
      margin: 5px 0 0;
      height: 60px;
      background: #00cfb4;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#00CFB4')};
      }
    }

    a {
      color: #ee4162;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  button.red {
    background: none;
    font-weight: bold;

    &:hover {
      background: ${lighten(0.009, '#eee')};
    }
  }

  a:last-child {
    color: red;
    font-weight: bold;
  }

  .center {
    display: flex;
    justify-content: center;
  }
`;
