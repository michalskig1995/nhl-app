import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { getNHLPlayer } from "../api/api";

const TeamPage = () => {
  const { playerId } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    getNHLPlayer(playerId)
      .then(
        result => {
          setIsLoaded(true);
          setPlayer(result.people[0]);
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
        <h1>{player.fullName}</h1>
        <ul>
          <li>
            Team:{" "}
            <Link
              teamId={player.currentTeam.id}
              to={`/teams/${player.currentTeam.id}`}
            >
              {player.currentTeam.name}
            </Link>
          </li>
          <li>Age: {player.currentAge}</li>
          <li>Number: {player.primaryNumber}</li>
          <li>Position: {player.primaryPosition.name}</li>
          <li>Dominant Hand: {player.shootsCatches}</li>
          <li>Nationality: {player.nationality}</li>
          {player.captain && <li>Captain</li>}
          {player.rookie && <li>Rookie</li>}
        </ul>
      </>
    );
  }
};

export default TeamPage;
