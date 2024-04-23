import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamCard from '../components/Atoms/TeamCard';

const TeamAll = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/teams'); // Ruta de la API para obtener equipos
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
          <div key={team.id}> {/* Usamos el id único del equipo como key */}
            <h2 className="text-2xl font-semibold mb-2">{team.team}</h2> {/* Mostrar el nombre del equipo */}
            {team.users.map(user => (
              <TeamCard
                key={user.id} // Usar el id único del usuario como key
                team_id={team.id} // Pasar el id del equipo
                user_id={user.id} // Pasar el id del usuario
                firstName={user.name} // Nombre del usuario
                lastName={user.lastname} // Apellido del usuario
                bootcamp={user.bootcamp} // Bootcamp del usuario
                level={user.pivot.level_id} // Nivel del usuario (asegúrate de obtenerlo correctamente)
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAll;

