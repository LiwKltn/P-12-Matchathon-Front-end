import React from 'react';

function TeamList({ teams }) {
  return (
    <div>
      <h1>Equipos</h1>
      {teams.map((team, index) => (
        <div key={index}>
          <h2>Equipo {index + 1}</h2>
          <ol>
            {team.map((coder, coderIndex) => (
              <li key={coderIndex}>
                {coder.nombre} {coder.apellido} -{' '}
                {coder.nivel_front && coder.nivel_front !== 'bajo' && (
                  <>
                    Stack Front: {coder.stacks_front} - Nivel Front: {coder.nivel_front} - Bootcamp: {coder.bootcamp}
                  </>
                )}
                {coder.nivel_back && coder.nivel_back !== 'bajo' && (
                  <>
                    Stack Back: {coder.stacks_back} - Nivel Back: {coder.nivel_back} - Bootcamp: {coder.bootcamp}
                  </>
                )}
                {coder.habilidades_comunicativas && (
                  <>
                    Habilidades Comunicativas: {coder.habilidades_comunicativas} - Bootcamp: {coder.bootcamp}
                  </>
                )}
                {coder.git_github && (
                  <>
                    Git/Github: {coder.git_github} - Bootcamp: {coder.bootcamp}
                  </>
                )}
                {coder.gestion_equipo && (
                  <>
                    Gestión de Equipo: {coder.gestion_equipo} - Bootcamp: {coder.bootcamp}
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default TeamList;
