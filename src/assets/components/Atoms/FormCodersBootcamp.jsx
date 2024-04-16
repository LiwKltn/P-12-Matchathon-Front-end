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
    <div>
      <select
        name="bootcamp_id"
        value={formData.bootcamp_id}
        onChange={handleBootcampChange}
        required
      >
        <option value="">Select your bootcamp</option>
        {bootcamps.map((bootcamp) => (
          <option key={bootcamp.id} value={bootcamp.id}>{bootcamp.bootcamp}</option>
        ))}
      </select>
    </div>
  );
};

export default FormCodersBootcamp;
