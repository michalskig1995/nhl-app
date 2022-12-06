import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { getNHLTeams } from "../api/api";

const Teams = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [teams, setTeams] = useState([]);
  const [searchString, setSearchString] = useState("");

  const onSearchInput = event => {
    setSearchString(event.target.value);
  };

  useEffect(() => {
    getNHLTeams().then(
      result => {
        setIsLoaded(true);
        setTeams(result.teams);
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
        <h1>Teams</h1>
        <div>Search</div>
        <input
          type="text"
          name="search"
          onChange={onSearchInput}
          value={searchString}
        />
        <ul>
          {teams
            .filter(team => team.name.toLowerCase().includes(searchString))
            .map(team => (
              <li key={team.id}>
                <Link teamId={team.id} to={`/teams/${team.id}`}>
                  {team.name}
                </Link>
              </li>
            ))}
        </ul>
        <Outlet />
      </>
    );
  }
};

export default Teams;
