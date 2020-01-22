import React from 'react';

import { Container } from './styles';

export default function FoodCard({ name }) {
  return (
    <Container className="red">
      <h1>{name}</h1>
    </Container>
  );
}
