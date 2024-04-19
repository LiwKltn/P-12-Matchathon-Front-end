import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamForm from '../../Atoms/Testeos/TeamForm';
import TeamList from '../../Atoms/Testeos/TeamList';

function TeamPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Lógica para obtener los equipos desde el servidor
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/teams/'); // Reemplaza '/api/teams' con la ruta correcta de tu controlador Laravel
        setTeams(response.data.teams);
      } catch (error) {
        console.error('Error al obtener los equipos:', error);
      }
    };

    fetchTeams();
  }, []);

  const handleSubmit = async ({ minParticipants, maxParticipants }) => {
    try {
      await axios.post('/api/teams/create', { minParticipants, maxParticipants }); // Reemplaza '/api/teams/create' con la ruta correcta de tu controlador Laravel
      // Lógica para actualizar la lista de equipos después de crear uno nuevo
    } catch (error) {
      console.error('Error al crear equipos:', error);
    }
  };

  return (
    <div>
      <TeamForm onSubmit={handleSubmit} />
      <TeamList teams={teams} />
    </div>
  );
}

export default TeamPage;
