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

  button {
    position: absolute;
    left: 10px;
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
    background: #fff;
    border-radius: 10px 10px 0 0;
    padding-top: 15px;
    height: 100%;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.6);
    padding-left: 30px;

    h1 {
      text-align: center;
      color: #6c6c6c;
    }

    h3 {
      text-align: left;
      color: #6c6c6c;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    div {
      margin-bottom: 20px;
      margin-right: 2px;
      margin-top: 10px;
    }

    p {
      margin-top: 10px;
      border: #ee4162 2px solid;
      border-radius: 10px;
      padding: 10px;
      text-align: justify;
      color: #7D7979;
    }

    textarea {
      width: 100%;
      height: 100px;
      resize: none;
      padding: 10px;
      border: #ee4162 2px solid;
      border-radius: 10px;
      color: #7D7979;

    }
  }
`;
