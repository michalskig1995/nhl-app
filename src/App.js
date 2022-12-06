import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamPage from "./pages/TeamPage";
import Players from "./pages/Players";
import PlayerPage from "./pages/PlayerPage";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />} />
            <Route path="teams/:teamId" element={<TeamPage />} />
            <Route path="players" element={<Players />} />
            <Route path="players/:playerId" element={<PlayerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
