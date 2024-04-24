import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamCard from '../components/Atoms/TeamCard';

const TeamAll = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/teams'); 
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8">Lista de Equipos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map(team => (
          <div key={team.id}>
            <h2 className="text-2xl font-semibold mb-2">{team.team}</h2>
            {team.users.map(user => (
              <TeamCard
                key={user.id}
                team_id={team.id}
                user_id={user.id}
                firstName={user.name}
                lastName={user.lastname}
                bootcamp={user.bootcamp_name}
                backendTechLevel={user.backend_technologies?.[0]?.pivot?.level_id}
                frontendTechLevel={user.frontend_technologies?.[0]?.pivot?.level_id}
                controlVersionStack={user.control_versions?.[0]?.pivot?.level_id}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAll;
