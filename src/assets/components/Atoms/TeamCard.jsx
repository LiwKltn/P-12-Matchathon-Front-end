import React from 'react';

const getTechLevelLabel = (level_id) => {
  switch (level_id) {
    case 1:
      return 'Senior';
    case 2:
      return 'Mid';
    case 3:
      return 'Junior';
    default:
      return 'Desconocido';
  }
};

const TeamCard = ({ team_id, user_id, firstName, lastName, bootcamp, backendTechLevel, frontendTechLevel, controlVersionLevel }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{firstName} {lastName}</div>
        <p className="text-gray-700 text-base">
          <span className="font-bold">ID de equipo:</span> {team_id}<br />
          <span className="font-bold">ID de usuario:</span> {user_id}<br />
          <span className="font-bold">Bootcamp:</span> {bootcamp}<br />
          {backendTechLevel && (
            <div>
              <span className="font-bold">Backend Tech Level:</span> {getTechLevelLabel(backendTechLevel.level_id)}<br />
            </div>
          )}
          {frontendTechLevel && (
            <div>
              <span className="font-bold">Frontend Tech Level:</span> {getTechLevelLabel(frontendTechLevel.level_id)}<br />
            </div>
          )}
          {controlVersionLevel && (
            <div>
              <span className="font-bold">Control Version Level:</span> {getTechLevelLabel(controlVersionLevel.level_id)}<br />
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;





