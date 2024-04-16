

import React, { useState } from 'react';
import axios from 'axios';
import FormCodersUser from '../components/Atoms/FormCodersUser';
import FormCodersBootcamp from '../components/Atoms/FormCodersBootcamp';
import FormCodersButton from '../components/Atoms/FormCodersButton';
import FormCodersFrontTech from './Atoms/FormCodersFrontTech';



const FormTeam = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    bootcamp_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBootcampChange = (e) => {
    const bootcampId = e.target.value;
    setFormData({
      ...formData,
      bootcamp_id: bootcampId
    });
  };

  const handleFrontendTechnologyChange = (e) => {
    const frontendTechnologyId = e.target.value;
    setFormData({
      ...formData,
      frontendtechnology: frontendTechnologyId
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/users', formData);
      setFormData({
        name: '',
        lastname: '',
        email: '',
        bootcamp_id: ''
      });
      alert('Formulario enviado correctamente');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Ocurrió un error al enviar el formulario');
    }
  };

  return (
    <div className="items-center justify-center mt-20">
      <form className="max-w-md mx-auto">
        <FormCodersUser formData={formData} handleChange={handleChange} />
        <FormCodersBootcamp formData={formData} handleBootcampChange={handleBootcampChange} />
        <FormCodersFrontTech formData={formData} handleFrontendTechnologyChange={handleFrontendTechnologyChange} />
        <FormCodersButton handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default FormTeam;

