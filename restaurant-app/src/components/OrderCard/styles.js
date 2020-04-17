import styled, { css } from 'styled-components';

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
  hr {
    border: 0;
    width: 100%;
    height: 3px;
    background: #999;
    margin-bottom: 5px;
    border-radius: 2px;
    ${(props) =>
      props.status === 1 &&
      css`
        background: yellow !important;
      `}
    ${(props) =>
      props.status === 2 &&
      css`
        background: #569f39 !important;
      `}
  }
  div {
    display: flex;
    flex-direction: row;
    .dishes-list {
      margin-left: 15px;
    }
    div {
      padding: 5px;
      display: flex;
      flex-direction: column;
      .code {
        font-size: 20px;
      }
      strong {
        display: flex;
        color: #4aa3a1;
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 5px;
      }
      span {
        color: #999;
      }
      .price {
        color: green;
        font-weight: bold;
        margin-top: 5px;
        margin-left: 5px;
        font-size: 20px;
      }
    }
    .message-div {
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      span {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
`;
