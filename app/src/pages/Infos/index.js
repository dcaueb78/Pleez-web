import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

import { Wrapper, Content, Scroll } from './styles';
import logo from '~/assets/logo.png';

export default function Infos() {
  const [result, setResult] = useState('No result');
  const [delay, setDelay] = useState(1);

  function handleScan(data) {
    if (data) {
      setResult(data);
    }
  }

  function handleError(err) {
    console.error(err);
  }

  const previewStyle = {
    height: 500,
    width: '100%',
    margin: 15
  };

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Pleez" />

        <Scroll>
          <h1>Leia seu código QR</h1>
          <QrReader
            resolution={1920}
            facingMode="environment"
            delay={delay}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
            className="QRcodeScaner"
          />
        </Scroll>
        {result}
      </Content>
    </Wrapper>
  );
}
