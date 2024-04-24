import React, { useState } from 'react';
import axios from 'axios';
import ParticipantsTeams from './ParticipantsTeams';

const TeamForm = () => {
  const [teamList, setTeamList] = useState('');
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTeamList(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const teamsArray = teamList.split('\n');
      for (const team of teamsArray) {
        await axios.post('http://127.0.0.1:8000/api/teams/', { team });
      }

      alert('Teams added successfully!');
      setTeams(teamsArray);
    } catch (error) {
      setError('Error adding teams. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div>
      <ParticipantsTeams />
      <h2>Add New Teams</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={teamList}
          onChange={handleInputChange}
          placeholder="Enter team names (one per line)"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Teams'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h3>Teams Added:</h3>
        <ul>
          {teams.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default TeamForm;
