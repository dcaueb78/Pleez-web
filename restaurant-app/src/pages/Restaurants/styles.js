import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    align-self: center;
    align-items: center;
    div {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
      &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        transition: all 0.2s;
      }
      width: 300px;
      height: 80px;
      background-color: ${lighten(0.3, '#00cfb4')};
      border: 1px solid #00cfb4;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-self: center;
      align-items: center;
      flex-direction: column;
      button {
        border: 0;
        background: none;
      }
      strong {
        color: #fff;
      }
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
  .load-more {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    button {
      border: 0;
      background: none;
      width: 200px;
      background: blue;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
      color: #999;
    }
  }
`;

