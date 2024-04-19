import React, { useState } from 'react';

function TeamForm({ onSubmit }) {
  const [minParticipants, setMinParticipants] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ minParticipants, maxParticipants });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="minParticipants">Mínimo de participantes por equipo:</label>
      <input
        type="number"
        id="minParticipants"
        name="minParticipants"
        value={minParticipants}
        onChange={(e) => setMinParticipants(e.target.value)}
      />
      <label htmlFor="maxParticipants">Máximo de participantes por equipo:</label>
      <input
        type="number"
        id="maxParticipants"
        name="maxParticipants"
        value={maxParticipants}
        onChange={(e) => setMaxParticipants(e.target.value)}
      />
      <button type="submit">Crear equipos</button>
    </form>
  );
}

export default TeamForm;
