import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  margin: 0;
  padding: 20px;
  gap: 12px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const NavItem = styled.li``;

export const NavLinkStyled = styled(NavLink)`
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    color: yellow;
  }
`;
