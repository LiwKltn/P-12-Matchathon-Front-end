import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/SomosF5.png'

const Navbar = () => {
  return (
    <nav className="bg-azul p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        <img className='w-36' src={Logo} alt="" />
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:bg-gray-700 px-3 py-1 rounded">Bootcamps+</Link>
        <Link to="/addcoders" className="text-white hover:bg-gray-700 px-3 py-1 rounded">Coders+</Link>
        <Link to="/generateteams" className="text-white hover:bg-gray-700 px-3 py-1 rounded">Crea Equipos</Link>
        <Link to="/teams" className="text-white hover:bg-gray-700 px-3 py-1 rounded">Equipos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
