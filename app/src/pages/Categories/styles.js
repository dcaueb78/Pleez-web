import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4162;
  display: flex;
  justify-content: center;
`;

export const Scroll = styled(PerfectScrollbar)`
  width: 100%;
  max-height: 90%;
  padding-right: 28px;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 7px;
  flex: 1;
  height: 100%;

  > button {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 50px;
    height: 50px;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  img {
    margin: 8px;
    width: 50px;
  }

  > div {
    img {
      width: 250px;
      height: 60px;
    }

    background: #fff;
    border-radius: 10px 10px 0 0;
    padding-top: 15px;
    height: 100%;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.6);

    div {
      margin-bottom: 20px;
      margin-left: 30px;
      margin-right: 2px;
      margin-top: 10px;
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

      span {
        color: #f64c75;
        align-self: flex-start;
        margin: 0 5px 10px;
        font-weight: bold;
      }

      button {
        margin: 5px 0 0;
        height: 44px;
        background: #22d6bc;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 15px;
        font-size: 20px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#22d6bc')};
        }
      }

      a {
        color: ${darken(0.1, '#22d6bc')};
        font-size: 16px;
        opacity: 0.8;
        margin: 10px;
        font-weight: bold;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
