import React from 'react';

import { ButtonHeader } from './styles';
import { MdAdd } from 'react-icons/md';

export default function ButtonNew({handler, text}) {
  return (
    <ButtonHeader onClick={handler}>
      <div>
        <button type="button">
          <MdAdd size={44} color="#fff" />
        </button>
        <strong>{text}</strong>
      </div>
    </ButtonHeader>
  );
}
