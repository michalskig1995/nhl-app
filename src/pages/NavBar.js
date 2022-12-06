import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => {
  return (
    <>
      <nav>
        <StyledUl>
          <Link to="/">Home</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/players">Players</Link>
        </StyledUl>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
