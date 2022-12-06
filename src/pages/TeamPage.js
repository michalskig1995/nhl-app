import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getNHLTeams } from "../api/api";

const TeamPage = () => {
  const { teamId } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    getNHLTeams().then(
      result => {
        setIsLoaded(true);
        const teamById = result.teams.find(t => t.id == teamId);
        if (teamById) {
          setTeam(teamById);
        }
      },

      error => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading</div>;
  } else {
    return (
      <>
        <h1>{team.name}</h1>
        <ul>
          <li>Conference: {team.conference.name}</li>
          <li>Division: {team.division.name}</li>
          <li>
            Roster
            <ul>
              {team.roster.roster.map(person => (
                <li key={person.person.id}>
                  <Link to={`/players/${person.person.id}`}>
                    {person.person.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </>
    );
  }
};

export default TeamPage;
