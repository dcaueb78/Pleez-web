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
      justify-content: center;
      width: 100%;
      margin-top: 20px;

      h1 {
        font-size: 30px;
        margin-left: 5px;
        font-weight: 500;
        color: #8a8d8e;
      }
      img {
        width: 40px;
        height: 40px;
        margin-right: 5px;
      }
    }
  }

  .greenCircle {
    background-color: green;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }

  .greyCircle {
    background-color: grey;
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }

  .yellowCircle {
    background-color: yellow;
    width: 30px;
    height: 30px;
    border-radius: 30px;
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
`;

export const Scroll = styled(PerfectScrollbar)`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 15px 15px 0 15px;

  > div {
    display: flex;
    justify-content: space-between;
    color: #46494e;
    padding: 15px 0 15px 0;
    align-items: center;

    border-bottom: 2px solid #eee;

    p {
      font-size: 16px;
    }
  }
`;
