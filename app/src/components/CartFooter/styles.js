import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px;
  background: #ee4162;
  border-radius: 24px 24px 0 0;
  display: flex;
  justify-content: space-around;
  font-size: 28px;
  font-weight: 500;
  align-items: center;
  padding: 20px;
  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 19px;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
