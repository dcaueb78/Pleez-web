import React from 'react';

import { Container } from './styles';
import history from '~/services/history';

export default function FoodCard({ name, redirect }) {
  return (
    <Container onClick={() => history.push(redirect)} className="red">
      <h1>{name}</h1>
    </Container>
  );
}
