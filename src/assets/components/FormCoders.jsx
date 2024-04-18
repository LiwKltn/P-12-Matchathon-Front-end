import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormCodersUser from '../components/Atoms/FormCodersUser';
import FormCodersBootcamp from '../components/Atoms/FormCodersBootcamp';
import FormCodersButton from '../components/Atoms/FormCodersButton'; // Importa el componente Button
import FormCodersFrontTech from './Atoms/FormCodersFrontTech';
import FormCodersBackendTech from './Atoms/FormCodersBackTech';
import FormCodersControlVersion from './Atoms/FormCodersControlVersion';
import FormCodersLevel from './Atoms/FormCodersLevel';

const FormCoders = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    bootcamp_id: '',
    active: false,
    role_id: '2',
    backendtechnology: '',
    frontendtechnology: '',
    controlversion: '',
  });

  const [frontendLevel, setFrontendLevel] = useState('');
  const [backendLevel, setBackendLevel] = useState('');
  const [versionControlLevel, setVersionControlLevel] = useState('');

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

  const handleBackendTechnologyChange = (e) => {
    const backendTechnologyId = e.target.value;
    setFormData({
      ...formData,
      backendtechnology: backendTechnologyId
    });
  };

  const handleControlVersionChange = (e) => {
    const controlVersionId = e.target.value;
    setFormData({
      ...formData,
      controlversion: controlVersionId
    });
  };

  const handleFrontendLevelChange = (e) => {
    setFrontendLevel(e.target.value);
  };

  const handleBackendLevelChange = (e) => {
    setBackendLevel(e.target.value);
  };

  const handleVersionControlLevelChange = (e) => {
    setVersionControlLevel(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        backend_level: backendLevel,
        frontend_level: frontendLevel,
        version_control_level: versionControlLevel
      };
      const response = await axios.post('http://127.0.0.1:8000/api/users', dataToSend);
      console.log('Respuesta del servidor:', response.data);
      setFormData({
        name: '',
        lastname: '',
        email: '',
        bootcamp_id: '',
        backendtechnology: '',
        frontendtechnology: '',
        controlversion: ''
      });
      setFrontendLevel('');
      setBackendLevel('');
      setVersionControlLevel('');
      alert('Formulario enviado correctamente');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Ocurrió un error al enviar el formulario');
      if (error.response && error.response.data) {
        console.error('Respuesta del servidor:', error.response.data);
        alert('Errores de validación: ' + JSON.stringify(error.response.data.errors));
      }
    }
  };
  
  return (
    <div className="items-center justify-center mt-10">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <FormCodersUser formData={formData} setFormData={setFormData} />
        <FormCodersBootcamp formData={formData} handleBootcampChange={handleBootcampChange} />
        <div className="flex">
          <FormCodersFrontTech formData={formData} handleFrontendTechnologyChange={handleFrontendTechnologyChange} />
          <FormCodersLevel formData={formData} level={frontendLevel} handleLevelChange={handleFrontendLevelChange} />
        </div>
        <div className="flex">
          <FormCodersBackendTech formData={formData} handleBackendTechnologyChange={handleBackendTechnologyChange} />
          <FormCodersLevel formData={formData} level={backendLevel} handleLevelChange={handleBackendLevelChange} />
        </div>
        <div className="flex">
          <FormCodersControlVersion formData={formData} handleControlVersionChange={handleControlVersionChange} />
          <FormCodersLevel formData={formData} level={versionControlLevel} handleLevelChange={handleVersionControlLevelChange} />
        </div>
        <FormCodersButton handleSubmit={handleSubmit} />

      </form>
    </div>
  );
};

export default FormCoders;



