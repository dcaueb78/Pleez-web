import React from 'react';

import { formatPrice } from '~/utils/format';
import { getStatusOrder } from '~/constants';

import { Card } from './styles';

export default function OrderCard({
  status,
  dishes,
  totalPrice,
  code,
  onClick,
}) {
  const { message } = getStatusOrder(status);

  return (
    <>
      <Card onClick={onClick} status={status}>
        <hr />
        <div>
          <div>
            <strong className="code">#{code}</strong>
            <div className="dishes-list">
              {dishes.map((dish) => (
                <>
                  <strong>1x {dish.name}</strong>
                  <div>
                    <span>{dish.details}</span>
                  </div>
                </>
              ))}
            </div>
            <span className="price">{formatPrice(totalPrice)}</span>
          </div>
          <div className="message-div">
            <span>{message}</span>
          </div>
        </div>
      </Card>
    </>
  );
}
