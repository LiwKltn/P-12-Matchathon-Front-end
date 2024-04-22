import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../../service/useFetch';

const ParticipantImput = () => {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [minParticipants, setMinParticipants] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const { data } = useFetch("http://localhost:8000/api/users");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data);
        setTotalUsers(response.data.length);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = data ? data.filter(user => user.role_id === 2 && user.active === true) : [];

  const generateTeams = async () => {
    // Verificar si los campos mínimos y máximos están llenos antes de generar equipos
    if (!minParticipants || !maxParticipants) {
      alert('Por favor, complete los campos de número mínimo y máximo de participantes.');
      return;
    }
  
    const numUsers = filteredUsers.length;
    const min = parseInt(minParticipants);
    const max = parseInt(maxParticipants);
  
    // Verificar si el número mínimo es mayor que el número máximo
    if (min > max) {
      alert('El número mínimo de participantes no puede ser mayor que el número máximo.');
      return;
    }
  
    const numTeams = Math.ceil(numUsers / max);
    const teamsArray = [];
  
    for (let i = 0; i < numTeams; i++) {
      const startIndex = i * max;
      const endIndex = Math.min(startIndex + max, numUsers);
      const team = filteredUsers.slice(startIndex, endIndex);
      teamsArray.push(team);
    }
  
    // Modificar el formato de los datos para enviar el nombre del equipo como 'team'
    const teamsData = teamsArray.map((team, index) => ({ team: `Team${index + 1}` }));
  
    // Enviar los equipos generados al backend
    try {
      await axios.post('http://localhost:8000/api/teams', {
        teams: teamsData,
      });
      alert('Equipos almacenados exitosamente.');
    } catch (error) {
      console.error('Error al almacenar equipos:', error);
    }
  };
  

  return (
    <div>
      <h1>Total de usuarios activos: {filteredUsers.length}</h1>
      <div>
        <label htmlFor="minParticipants">Número mínimo de participantes:</label>
        <input
          id="minParticipants"
          type="number"
          value={minParticipants}
          onChange={(e) => setMinParticipants(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="maxParticipants">Número máximo de participantes:</label>
        <input
          id="maxParticipants"
          type="number"
          value={maxParticipants}
          onChange={(e) => setMaxParticipants(e.target.value)}
        />
      </div>
      <button onClick={generateTeams}>Generar Equipos</button>
      {teams.map((team, index) => (
        <div key={index}>
          <h3>Equipo {index + 1}</h3>
          <ul>
            {team.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ParticipantImput;




