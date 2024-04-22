import React from 'react';
import useFetch from '../../service/useFetch';
const Participants = () => {
  const url = "http://127.0.0.1:8000/api/users"; 
  const { data } = useFetch(url);
  if (data === null) {
    return <>Loading</>;
  }
  // Filtrar usuarios con role_id igual a 2 y active igual a 1
  const filteredUsers = data.filter(user => user.role_id === 2 && user.active === true);
  // Contar el número de usuarios filtrados
  const filteredUsersCount = filteredUsers.length;
  return (
    <div>
      <h1>Total de Usuarios activos en esta Hackathon son: {filteredUsersCount}</h1>
    </div>
  );
}
export default Participants;
