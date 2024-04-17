import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormCodersBackendTech = ({ formData, handleBackendTechnologyChange }) => {
  const [backendTechnologies, setBackendTechnologies] = useState([]);

  useEffect(() => {
    const fetchBackendTechnologies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/backendtechnologies');
        setBackendTechnologies(response.data);
      } catch (error) {
        console.error('Error fetching backend technologies:', error);
      }
    };

    fetchBackendTechnologies();
  }, []);

  return (
    <div className="flex flex-col w-1/2 mr-4 mb-4">
      <select
        className="p-2 border border-gray-300 rounded"
        name="backendtechnology"
        value={formData.backendtechnology}
        onChange={handleBackendTechnologyChange}
        required
      >
        <option value="">Backend technology</option>
        {backendTechnologies.map((backendTechnology) => (
          <option key={backendTechnology.id} value={backendTechnology.id}>{backendTechnology.backendtechnology}</option>
        ))}
      </select>
    </div>
  );
};

export default FormCodersBackendTech;
