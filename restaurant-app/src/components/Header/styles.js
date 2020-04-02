import styled from 'styled-components';

export const Container = styled.div`
  background: #ee4162;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #fff;
    }

    a {
      font-weight: bold;
      font-size: 18px;
      color: #fff;
      margin-right: 30px;
    }
    a:hover {
      transition: color 0.2s;
      transition: top 5s;
      color: #22d6bc;
      cursor: pointer;
      transform: translateY(-2px);
      transition: all 0.1s;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #fff;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #fff;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
  button {
    background: none;
    border: none;
    margin-left: 30px;
  }
`;
