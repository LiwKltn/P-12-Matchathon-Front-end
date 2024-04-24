import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../../service/useFetch';
import { Link } from 'react-router-dom';

const ParticipantInput = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [minParticipants, setMinParticipants] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const { data } = useFetch("http://localhost:8000/api/users");
  const [teams, setTeams] = useState([]); // Estado para almacenar los equipos

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
    if (!minParticipants || !maxParticipants) {
      alert('Por favor, complete los campos de número mínimo y máximo de participantes.');
      return;
    }

    const numUsers = filteredUsers.length;
    const min = parseInt(minParticipants);
    const max = parseInt(maxParticipants);

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

    const teamsData = teamsArray.map((team, index) => ({
      team: `Team${index + 1}`,
      users: team.map(user => user.id),
    }));

    try {
      // Almacena los nuevos equipos
      const response = await axios.post('http://localhost:8000/api/teams', {
        teams: teamsData,
      });
      alert('Equipos almacenados exitosamente.');
      setTeams(response.data.teams);
    } catch (error) {
      console.error('Error al almacenar equipos:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-screen-lg">
        <h1 className="text-center mt-4 font-custom text-2xl mb-4">De {totalUsers} coders inscritos</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 md:mr-2 md:mb-0">
            <label htmlFor="minParticipants" className="block mb-2">Número mínimo de participantes:</label>
            <input
              id="minParticipants"
              type="number"
              value={minParticipants}
              onChange={(e) => setMinParticipants(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 mb-2"
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-2">
            <label htmlFor="maxParticipants" className="block mb-2">Número máximo de participantes por equipo:</label>
            <input
              id="maxParticipants"
              type="number"
              value={maxParticipants}
              onChange={(e) => setMaxParticipants(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <Link to="/teams">
            <button onClick={generateTeams} className="mt-8 px-6 py-3 bg-azul text-white rounded-md font-custom hover:bg-indigo-800">
              Generar Equipos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParticipantInput;


































