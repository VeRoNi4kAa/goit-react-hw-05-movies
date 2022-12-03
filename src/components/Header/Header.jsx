import { Nav, NavItem, HeaderContainer } from './HeaderStyled';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <ul>
            <NavItem>
              <NavLink to="/" className="notActive">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movies" className="notActive">
                Movies
              </NavLink>
            </NavItem>
          </ul>
        </Nav>
      </HeaderContainer>
    </>
  );
}
