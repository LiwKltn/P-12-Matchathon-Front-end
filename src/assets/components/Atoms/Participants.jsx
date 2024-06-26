import React from 'react';
import useFetch from '../../service/useFetch';

const Participants = () => {
  const url = "http://127.0.0.1:8000/api/users";
  const { data } = useFetch(url);
  if (data === null) {
    return <>Loading</>;
  }
 
  const filteredUsers = data.filter(user => user.role_id === 2 && user.active === true);

  const filteredUsersCount = filteredUsers.length;
  return (
    <div>
      <h1 className="text-center mt-10 font-custom text-2xl">Total de Usuarios activos en esta Hackathon son: {filteredUsersCount}</h1>
    </div>
  );
}
export default Participants;
