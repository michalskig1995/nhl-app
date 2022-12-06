export const getNHLTeams = () => {
  return fetch(
    "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster"
  ).then(res => {
    if (res.status === 200) return res.json();
    else throw new Error("Invalid response");
  });
};

export const getNHLPlayer = playerId => {
  return fetch(`https://statsapi.web.nhl.com/api/v1/people/${playerId}`).then(
    res => {
      if (res.status === 200) return res.json();
      else throw new Error("Invalid response");
    }
  );
};
