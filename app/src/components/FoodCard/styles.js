import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  height: 78px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: red;
  background-image: url(${props => props.backgroundImageUrl});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  h1 {
    font-weight: 500;
  }
`;
