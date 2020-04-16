import React from 'react';

import { Card } from './styles';

export default function CategoryCard({ name, onClick, deleteFunction }) {

  return (
    <>
      <Card onClick={onClick}>
        <div>
          <div>
            <strong>{name}</strong>
          </div>
          <div>
            <span onClick={deleteFunction}>{'Excluir'}</span>
          </div>
        </div>
      </Card>
    </>
  );
}
