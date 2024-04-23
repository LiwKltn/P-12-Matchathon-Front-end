import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamsMatchathon = () => {
    const [users, setUsers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [minParticipants, setMinParticipants] = useState('');
    const [maxParticipants, setMaxParticipants] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const controlVersionLevelsResponse = await axios.get('http://127.0.0.1:8000/api/user-controlversion-levels');
                const frontendTechLevelsResponse = await axios.get('http://127.0.0.1:8000/api/user-frontend-tech-levels');
                const backendTechLevelsResponse = await axios.get('http://127.0.0.1:8000/api/user-backendtech-levels');

                const usersData = mergeData(controlVersionLevelsResponse.data, frontendTechLevelsResponse.data, backendTechLevelsResponse.data);
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const mergeData = (controlVersionLevels, frontendTechLevels, backendTechLevels) => {
        const userMap = {};

        backendTechLevels.forEach(item => {
            const userId = item.user_id;
            if (!userMap[userId]) {
                userMap[userId] = {};
            }
            userMap[userId].backendtechlevel_id = item.level_id;
            userMap[userId].level_id = item.level_id; // Adding level_id to userMap
        });

        frontendTechLevels.forEach(item => {
            const userId = item.user_id;
            if (!userMap[userId]) {
                userMap[userId] = {};
            }
            userMap[userId].frontendtechlevel_id = item.level_id;
            userMap[userId].level_id = item.level_id; // Adding level_id to userMap
        });

        controlVersionLevels.forEach(item => {
            const userId = item.user_id;
            if (!userMap[userId]) {
                userMap[userId] = {};
            }
            userMap[userId].user_id = userId;
            userMap[userId].controlversionstack_id = item.level_id;
            userMap[userId].level_id = item.level_id; // Adding level_id to userMap
        });


        const mergedData = Object.values(userMap);

        return mergedData;
    };

    const generateTeams = () => {
        const min = parseInt(minParticipants);
        const max = parseInt(maxParticipants);

        if (isNaN(min) || isNaN(max) || min > max) {
            alert('Ingrese números válidos para el mínimo y máximo de participantes.');
            return;
        }

        const shuffledUsers = [...users]; // Shuffle the users to ensure randomness
        shuffledUsers.sort(() => Math.random() - 0.5);

        const numTeams = Math.ceil(shuffledUsers.length / max);
        const teams = [];

        for (let i = 0; i < numTeams; i++) {
            const team = shuffledUsers.splice(0, max);
            teams.push(team);
        }

        setTeams(teams);
    };

    return (
        <div>
            <div>
                <label htmlFor="minParticipants">Número mínimo de participantes:</label>
                <input
                    id="minParticipants"
                    type="number"
                    value={minParticipants}
                    onChange={(e) => setMinParticipants(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="maxParticipants">Número máximo de participantes por equipo:</label>
                <input
                    id="maxParticipants"
                    type="number"
                    value={maxParticipants}
                    onChange={(e) => setMaxParticipants(e.target.value)}
                />
            </div>

            <button onClick={generateTeams}>Generar Equipos</button>

            {teams.map((team, index) => (
                <div key={index}>
                    <h3>Equipo {index + 1}</h3>
                    <ol>
                        {team.map(user => (
                            <li key={user.user_id}>
                                User ID: {user.user_id} |  BackendTechLevel ID: {user.backendtechlevel_id} | FrontendTechLevel ID: {user.frontendtechlevel_id} | ControlVersionStack ID: {user.controlversionstack_id}
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
};

export default TeamsMatchathon;




