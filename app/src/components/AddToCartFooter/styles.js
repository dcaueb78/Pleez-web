import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px;
  background: #ee4162;
  border-radius: 24px 24px 0 0;
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-weight: 500;
  align-items: center;
  justify-content: space-around;
  padding: 5px 30px 5px 30px;
  color: #fff;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      font-size: 19px;
    }
    h3 {
      font-size: 24px;
    }
  }

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
    font-weight: bold;
  }
`;
