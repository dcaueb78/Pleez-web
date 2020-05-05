import styled from 'styled-components';

export const ButtonHeader = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 10px;
  div {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
    &:hover {
      cursor: pointer;
      transform: translateY(-5px);
      transition: all 0.2s;
    }
    width: 200px;
    height: 70px;
    background-color: ${(props) => (props.status === 0 ? '#CCCCCC' : 'green')};
    border: 1px solid ${(props) => (props.status === 0 ? '#CCCCCC' : 'green')};
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
