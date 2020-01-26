import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

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
    width: 500
  };

  return (
    <div>
      <QrReader
        resolution={1920}
        facingMode="environment"
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  );
}
