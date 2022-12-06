import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>NHL Search App</h1>
      <ul>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Home;
