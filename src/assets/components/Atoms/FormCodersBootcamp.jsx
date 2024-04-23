import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormCodersBootcamp = ({ formData, handleBootcampChange }) => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/bootcamps');
        setBootcamps(response.data);
      } catch (error) {
        console.error('Error fetching bootcamps:', error);
      }
    };

    fetchBootcamps();
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-md">
        <select
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          name="bootcamp_id"
          value={formData.bootcamp_id}
          onChange={handleBootcampChange}
          required
          
        >
          <option value="">Selecciona un bootcamp</option>
          {bootcamps.map((bootcamp) => (
            <option key={bootcamp.id} value={bootcamp.id}>{bootcamp.bootcamp}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormCodersBootcamp;