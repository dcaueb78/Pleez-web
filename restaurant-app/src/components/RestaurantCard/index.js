import React from 'react';

import { Nonconformity } from './styles';

export default function RestaurantCard({ name, status, cnpj, color }) {
  return (
    <>
      <Nonconformity onClick={() => console.log('oi')} status={status} color={color}>
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
      </Nonconformity>
    </>
  );
}
