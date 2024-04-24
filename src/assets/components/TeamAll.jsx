import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamCard from '../components/Atoms/TeamCard';

const TeamAll = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsResponse = await axios.get('http://127.0.0.1:8000/api/teams');
        const teamsData = teamsResponse.data;

        const backendTechLevelsResponse = await axios.get('http://127.0.0.1:8000/api/user-backendtech-levels');
        const backendTechLevelsData = backendTechLevelsResponse.data;

        const frontendTechLevelsResponse = await axios.get('http://127.0.0.1:8000/api/user-frontend-tech-levels');
        const frontendTechLevelsData = frontendTechLevelsResponse.data;

        const controlVersionLevelsResponse = await axios.get('http://127.0.0.1:8000/api/user-controlversion-levels');
        const controlVersionLevelsData = controlVersionLevelsResponse.data;

        const teamsWithUserInfo = teamsData.map(team => {
          const updatedUsers = team.users.map(user => {
            const backendTechLevel = backendTechLevelsData.find(item => item.user_id === user.id);
            const frontendTechLevel = frontendTechLevelsData.find(item => item.user_id === user.id);
            const controlVersionLevel = controlVersionLevelsData.find(item => item.user_id === user.id);

            return {
              ...user,
              backendTechLevel,
              frontendTechLevel,
              controlVersionLevel
            };
          });

          return {
            ...team,
            users: updatedUsers
          };
        });

        setTeams(teamsWithUserInfo);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8 text-indigo-800">Lista de Equipos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map(team => (
          <div key={team.id} className="bg-white rounded-lg shadow-md p-4 border-2 border-indigo-800 text-indigo-900">
            <h2 className="text-2xl font-semibold mb-2 text-center">{team.team}</h2>
            <div className="grid grid-cols-3 gap-4">
              {team.users.map(user => (
                <TeamCard
                  key={user.id}
                  team_id={team.id}
                  user_id={user.id}
                  firstName={user.name}
                  lastName={user.lastname}
                  bootcamp={user.bootcamp_id}
                  backendTechLevel={user.backendTechLevel}
                  frontendTechLevel={user.frontendTechLevel}
                  controlVersionLevel={user.controlVersionLevel}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAll;







