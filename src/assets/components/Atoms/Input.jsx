import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../../service/useFetch';

const Input = () => {
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
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-screen-lg">
        <h1 className="text-center mt-10 font-custom text-2xl mb-4">De {totalUsers} coders inscritos</h1>
        <div className="flex flex-wrap justify-center"> {/* Contenedor de las dos columnas */}
          <div className="w-full md:w-1/2 md:mr-2 md:mb-0"> {/* Columna 1 */}
            <label htmlFor="minParticipants" className="block mb-2">Número mínimo de participantes:</label>
            <input
              id="minParticipants"
              type="number"
              value={minParticipants}
              onChange={(e) => setMinParticipants(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-2"> {/* Columna 2 */}
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
          <button onClick={generateTeams} className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Generar Equipos</button>
        </div>
        {teams.map((team, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-center mb-2">Equipo {index + 1}</h3>
            <ul className="text-center">
              {team.map(user => (
                <li key={user.id} className="inline-block px-4 py-2 bg-gray-200 rounded-md mx-1">{user.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Input;