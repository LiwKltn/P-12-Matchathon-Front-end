import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamCard from '../components/Atoms/TeamCard';

const TeamAll = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/bootcamps',); // Reemplaza con la URL de tu API
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8">Lista de Equipos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <TeamCard
            key={user.id} // Usar el id único del usuario como key
            team_id={user.team_id} // Cambiar a team_id si se refiere al identificador del equipo
            user_id={user.id} // Cambiar a id si se refiere al identificador del usuario
            firstName={user.name} // Usar el nombre del usuario en lugar de 'Name'
            lastName={user.lastname} // Cambiar a lastname si ese es el campo correcto
            bootcamp={user.bootcamp} // Verifica que este campo sea correcto
            level={user.level} // Verifica que este campo sea correcto
          />
        ))}
      </div>
    </div>
  );
};

export default TeamAll;
