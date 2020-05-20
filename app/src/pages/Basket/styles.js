import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4162;
  display: flex;
  justify-content: center;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      margin-top: 20px;

      h1 {
        font-size: 30px;
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  footer {
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin: 20px 0;

    button {
      width: 100%;
      height: 60px;
      border-radius: 12px;
      background: #22d6bc;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      font-weight: 600;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 15px 20px 0 20px;

  h4 {
    margin: 10px;
  }

  > button:first-child {
    width: 100%;
    height: 100px;
    border-radius: 12px;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  > p:first-child {
    border-bottom: 2px solid #eee;
    margin-bottom: 10px;
  }

  > div {
    border-bottom: 2px solid #eee;
    > div:first-child {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: left;
      align-items: center;
      h2 {
        font-size: 35px;
        font-weight: 600;
        margin-right: 10px;
      }
      > p {
        margin-left: 10px;
        font-size: 24px;
      }
      button {
        margin-left: 10px;
      }
    }
    p {
      b {
        font-size: 18px;
        font-weight: 600;
      }

      span {
        font-size: 18px;
        font-weight: lighter;
      }
    }
    div {
      display: flex;
      justify-content: flex-end;
    }
    padding-bottom: 15px;
    margin-bottom: 15px;
  }

  .input-width-100 {
    width: 100%;
  }

  input {
    height: 30px;
    border-radius: 8px;
    padding: 5px;
    color: ${lighten(0.1, '#000')};
    opacity: 0.7;

    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  input::placeholder {
    color: ${lighten(0.6, '#000')};
  }
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

  h1 {
    text-align: center;
    color: #6c6c6c;
    font-size: 10px;
  }

  h3 {
    text-align: left;
    color: #6c6c6c;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-top: 20px;
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
    color: #7d7979;
  }
`;
