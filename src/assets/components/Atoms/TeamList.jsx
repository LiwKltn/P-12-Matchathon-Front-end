import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/teams/'); 
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h1>Lista de Equipos</h1>
      {teams.map((team, index) => (
        <div key={index}>
          <h2>Equipo {index + 1}</h2>
          <ul>
            {team.users.map((user, userIndex) => (
              <li key={userIndex}>
                Usuario ID: {user.id}, BackendLevelID: {user.backendTechLevels[0].level_id}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
