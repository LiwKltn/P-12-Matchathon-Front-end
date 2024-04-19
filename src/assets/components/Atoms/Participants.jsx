import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Participants = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users');
      const users = response.data; // Supongamos que la respuesta es una lista de usuarios
      setTotalUsers(users.length);
    } catch (error) {
      setError('Error fetching users. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h2>Total Participants</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Total users: {totalUsers}</p>
      )}
    </div>
  );
};

export default Participants;
