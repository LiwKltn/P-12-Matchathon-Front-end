import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormCodersControlVersion = ({ formData, handleControlVersionChange }) => {
  const [controlVersions, setControlVersions] = useState([]);

  useEffect(() => {
    const fetchControlVersions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/controlversions');
        setControlVersions(response.data);
      } catch (error) {
        console.error('Error fetching control versions:', error);
      }
    };

    fetchControlVersions();
  }, []);

  return (
    <div className="flex flex-col w-1/2 mr-4">
      <select
        className="p-2 border border-gray-300 rounded"
        name="controlversion"
        value={formData.controlversion}
        onChange={handleControlVersionChange}
        required
      >
        <option value="">Control de versiones</option>
        {controlVersions.map((controlVersion) => (
          <option key={controlVersion.id} value={controlVersion.id}>{controlVersion.controlversion}</option>
        ))}
      </select>
    </div>
  );
};

export default FormCodersControlVersion;
