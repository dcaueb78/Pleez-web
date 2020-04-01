import React from 'react';

import { Nonconformity } from './styles';

export default function OrderCard({ status }) {
  return (
    <>
      <Nonconformity onClick={() => console.log('oi')} status={status}>
        <hr />
        <div>
          <div>
            <strong>pedido</strong>
            <span>#123</span>
          </div>
          <div>
            <span>Preparar</span>
          </div>
        </div>
      </Nonconformity>
    </>
  );
}
