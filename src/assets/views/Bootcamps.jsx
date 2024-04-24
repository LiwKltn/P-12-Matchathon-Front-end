import React from 'react';
import BootcampsForm from '../components/Atoms/BootcampsForm';
import Navbar from '../components/Navbar';
import Banner_nav from '../components/Atoms/Banner_nav';

const Bootcamps = () => {
  return (
    <div>
        <Navbar />
        <Banner_nav />
        <h1 className='text-azul text-xl font-custom flex justify-center mt-16'>Añade los Bootcamps que participarán de esta Hackathon</h1>
      <BootcampsForm />
    </div>
  );
}

export default Bootcamps;
