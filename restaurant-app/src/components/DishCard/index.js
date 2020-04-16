import React from 'react';

import { formatPrice } from '~/utils/format';

import { Card } from './styles';

export default function DishCard({ name, details, price, onClick, deleteFunction }) {
  return (
    <>
      <Card onClick={onClick}>
        <div>
          <div>
            <strong>{name}</strong>
            <span>{details}</span>
            <strong className="price">{formatPrice(price)}</strong>
          </div>
          <div>
            <span onClick={deleteFunction}>{'Excluir'}</span>
          </div>
        </div>
      </Card>
    </>
  );
}
