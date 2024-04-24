import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormCodersLevel = ({ formData, handleLevelChange }) => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/levels');
        setLevels(response.data);
      } catch (error) {
        console.error('Error fetching levels:', error);
      }
    };

    fetchLevels();
  }, []);

  return (
    <div className="flex flex-col w-1/2">
      <select
        className="p-2 border border-gray-300 rounded"
        name="level"
        value={formData.level} // Aquí debes usar el valor de nivel del formulario, no formData.level
        onChange={handleLevelChange}
        required
      >
        <option value="">nivel</option>
        {levels.map((level) => (
          <option key={level.id} value={level.id}>{level.level}</option>
        ))}
      </select>
    </div>
  );
};

export default FormCodersLevel;

