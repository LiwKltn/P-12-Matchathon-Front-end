import React from 'react';

const TeamCard = ({ team_id, user_id, firstName, lastName, bootcamp, level }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4 ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{firstName} {lastName}</div>
        <p className="text-gray-700 text-base">
          <span className="font-bold">ID de equipo:</span> {team_id}<br />
          <span className="font-bold">ID de usuario:</span> {user_id}<br />
          <span className="font-bold">Bootcamp:</span> {bootcamp}<br />
          <span className="font-bold">Nivel:</span> {level}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
