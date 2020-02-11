import React from 'react';

import { Container } from './styles';
import history from '~/services/history';

export default function FoodCard({ name= '', redirect }) {
  function handleRedirect() {
    if (redirect) {
      history.push(redirect);
    }
  }

  return (
    <Container onClick={handleRedirect}>
      <h1>{name}</h1>
    </Container>
  );
}
