import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getNHLTeams } from "../api/api";

const Players = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [players, setPlayers] = useState(null);
  const [searchString, setSearchString] = useState("");

  const onSearchInput = event => {
    setSearchString(event.target.value);
  };

  useEffect(() => {
    getNHLTeams().then(
      result => {
        setIsLoaded(true);
        const allPlayers = [];
        result.teams.forEach(team => {
          allPlayers.push(team.roster.roster);
        });
        setPlayers(allPlayers.flat());
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
        <h1>Players</h1>
        <div>Search</div>
        <input
          type="text"
          name="search"
          onChange={onSearchInput}
          value={searchString}
        />
        <ul>
          {players
            .filter(player =>
              player.person.fullName.toLowerCase().includes(searchString)
            )
            .map(player => (
              <li key={player.person.id}>
                <Link to={`/players/${player.person.id}`}>
                  {player.person.fullName}
                </Link>
              </li>
            ))}
        </ul>
      </>
    );
  }
};

export default Players;
