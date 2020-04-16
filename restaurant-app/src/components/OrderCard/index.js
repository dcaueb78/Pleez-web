import React from 'react';

import { formatPrice } from '~/utils/format';
import { getStatusOrder } from '~/constants';

import { Card } from './styles';

export default function OrderCard({ status, totalPrice, code, onClick }) {
  const { message } = getStatusOrder(status);

  return (
    <>
      <Card onClick={onClick} status={status}>
        <hr />
        <div>
          <div>
            <strong>#{code}</strong>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div>
            <span>{message}</span>
          </div>
        </div>
      </Card>
    </>
  );
}
