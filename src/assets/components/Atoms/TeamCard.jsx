import React from 'react';

const TeamCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Detalles del participante</div>
          <div className="mt-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
            <input type="text" id="nombre" name="nombre" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Ingrese el nombre" />
          </div>
          <div className="mt-4">
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido:</label>
            <input type="text" id="apellido" name="apellido" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Ingrese el apellido" />
          </div>
          <div className="mt-4">
            <label htmlFor="bootcamp" className="block text-sm font-medium text-gray-700">Bootcamp:</label>
            <select id="bootcamp" name="bootcamp" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Select Bootcamp</option>
              <option>Bootcamp A</option>
              <option>Bootcamp B</option>
              <option>Bootcamp C</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
