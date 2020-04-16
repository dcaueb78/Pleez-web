import styled from 'styled-components';
export const Card = styled.li`
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: all 0.2s;
  }
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 15px 15px 15px 15px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    div {
      padding: 5px;
      display: flex;
      flex-direction: column;
      strong {
        display: flex;
        color: #4aa3a1;
        font-size: 20px;
        font-weight: normal;
        margin-bottom: 5px;
      }
      span {
        color: #999;
      }
    }
    div:last-child {
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      span {
        color: red;
        font-size: 15px;
        font-weight: bold;
      }

      span:hover {
        text-decoration: underline;
      }
    }
  }
`;
