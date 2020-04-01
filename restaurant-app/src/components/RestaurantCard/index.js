import React from 'react';

import { Card } from './styles';

export default function RestaurantCard({ name, status, cnpj, color, onClick }) {
  return (
    <>
      <Card onClick={onClick} status={status} color={color}>
        <hr />
        <div>
          <div>
            <strong>{name}</strong>
            <span>{cnpj}</span>
          </div>
          <div>
            <span>Selecionar</span>
          </div>
        </div>
      </Card>
    </>
  );
}
