import React, { useState } from 'react';
import './Button.css'; // Asegúrate de que el archivo CSS esté correctamente importado

export default function Button() {
  const [isExploding, setExploding] = useState(false);

  const handleExplode = () => {
    setExploding(true);
    setTimeout(() => {
      setExploding(false);
    }, 1000); // Cambia esto al tiempo deseado antes de que explote
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button
        type="button"
        className={`animated-button ${isExploding ? 'exploding' : ''}`}
        onClick={handleExplode}
      >
        <span>Machathon</span>
      </button>
    </div>
  );
}





