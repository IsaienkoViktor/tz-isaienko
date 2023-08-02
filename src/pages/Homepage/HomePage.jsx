import { NavLink } from "react-router-dom";
import {
  StyledHomeButton,
  StyledHomeText,
  StyledHomeWrapper,
} from "./HomePage.styled";

export const HomePage = () => {
  return (
    <>
      <StyledHomeWrapper>
        <StyledHomeText>
          Welcome ! You are visiting Tweets page application !
        </StyledHomeText>
        <NavLink to="/TweetsPage">
          <StyledHomeButton type="button">Tweets</StyledHomeButton>
        </NavLink>
      </StyledHomeWrapper>
    </>
  );
};
