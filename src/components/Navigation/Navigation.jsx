import { NavLink } from "react-router-dom";
import { NavLinkStyled, NavList, NavStyled } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <>
      <NavStyled>
        <NavList>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/TweetsPage">Tweets</NavLinkStyled>
          </li>
        </NavList>
      </NavStyled>
    </>
  );
};
