import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
  padding-right: 28px;
  display: flex;
  flex-direction: column;

  border: 2px solid #ffffff;
  border-radius: 12px;
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
