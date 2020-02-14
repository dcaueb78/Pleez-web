import React from 'react';

import { Container } from './styles';

export default function BasketContent({ children }) {
  return (
    <Container id="cart">
      {children}
    </Container>
  );
}
