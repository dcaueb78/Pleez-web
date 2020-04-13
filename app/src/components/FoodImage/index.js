import React from 'react';

import { Container } from './styles';
import history from '~/services/history';

export default function FoodImage({ name= '', redirect }) {

  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
}
