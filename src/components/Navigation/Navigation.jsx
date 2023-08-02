import {
  NavItem,
  NavLinkStyled,
  NavList,
  NavStyled,
} from "./Navigation.styled";

export const Navigation = () => {
  return (
    <>
      <NavStyled>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/TweetsPage">Tweets</NavLinkStyled>
          </NavItem>
        </NavList>
      </NavStyled>
    </>
  );
};
