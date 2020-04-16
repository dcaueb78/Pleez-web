import styled from 'styled-components';
import { lighten } from 'polished';

export const ButtonHeader = styled.div`
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
`;
