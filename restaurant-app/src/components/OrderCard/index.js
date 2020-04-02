import React from 'react';

import { formatPrice } from '~/utils/format';

import { Nonconformity } from './styles';

export default function OrderCard({ status, totalPrice, code, onClick}) {
  return (
    <>
      <Nonconformity onClick={onClick} status={status}>
        <hr />
        <div>
          <div>
            <strong>#{code}</strong>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div>
            <span>Preparar</span>
          </div>
        </div>
      </Nonconformity>
    </>
  );
}
