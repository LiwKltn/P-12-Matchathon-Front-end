import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormCodersFrontTech = ({ formData, handleFrontendTechnologyChange }) => {
  const [frontendTechnologies, setFrontendTechnologies] = useState([]);

  useEffect(() => {
    const fetchFrontendTechnologies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/frontendtechnologies');
        setFrontendTechnologies(response.data);
      } catch (error) {
        console.error('Error fetching frontend technologies:', error);
      }
    };

    fetchFrontendTechnologies();
  }, []);

  return (
    <div>
      <select
        name="frontendtechnology"
        value={formData.frontendtechnology}
        onChange={handleFrontendTechnologyChange}
        required
      >
        <option value="">Select your frontend technology</option>
        {frontendTechnologies.map((frontendTechnology) => (
          <option key={frontendTechnology.id} value={frontendTechnology.id}>{frontendTechnology.frontendtechnology}</option>
        ))}
      </select>
    </div>
  );
};

export default FormCodersFrontTech;
