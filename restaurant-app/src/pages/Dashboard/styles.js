import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
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

  .flex{
    display: flex;
  }

  .center {
    justify-content: center;
  }
`;

