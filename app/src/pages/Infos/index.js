import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

import history from '~/services/history';

import { Wrapper, Content, Scroll } from './styles';
import logo from '~/assets/logo.png';

export default function Infos() {
  const [delay, setDelay] = useState(500);

  function handleScan(QRCodeScannedStringifyObject) {
    if (QRCodeScannedStringifyObject) {
      const QRCodeParsedObject = JSON.parse(QRCodeScannedStringifyObject);
      history.push(
        `/categorias/${QRCodeParsedObject.restaurant}/${QRCodeParsedObject.chair}`
      );
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
      </Content>
    </Wrapper>
  );
}
