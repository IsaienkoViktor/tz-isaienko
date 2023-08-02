import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavArrow = styled(NavLink)`
  transition: transform 150ms ease-in-out;

  &:focus img,
  &:hover img,
  &:active img {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const ArrowStyled = styled.img`
  margin-left: 20px;
  margin-top: 20px;
`;
