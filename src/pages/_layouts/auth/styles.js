import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4162;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  height: 100%;
  margin: 0 10px;

  img {
    width: 150px;
  }

  div {
    background: #fff;
    border-radius: 10px;
    padding-top: 15px;

    h1 {
      color: #22d6bc;
      font-size: 34px;
    }

    div {
      margin-bottom: 20px;
      margin-left: 30px;
      margin-right: 30px;

      span {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      padding: 0 30px;

      input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 15px;
        height: 44px;
        padding: 0 15px;
        color: rgba(0, 0, 0, 0.4);
        margin: 0 0 10px;
        &::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }
      }

      button {
        margin: 5px 0 0;
        height: 44px;
        background: #22d6bc;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 15px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#22d6bc')};
        }
      }

      a {
        color: #ee4162;
        font-size: 16px;
        opacity: 0.8;
        margin: 10px;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
