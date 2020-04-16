import React from 'react';

import { MdAdd } from 'react-icons/md';
import { ButtonHeader } from './styles';

export default function ButtonNew({ handler, text }) {
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
