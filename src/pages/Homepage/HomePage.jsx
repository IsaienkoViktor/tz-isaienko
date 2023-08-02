import { NavLink } from "react-router-dom";
import {
  StyledHomeButton,
  StyledHomeText,
  StyledHomeWrapper,
} from "./HomePage.styled";
import imgCard from "../../images/img@1x.png";

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
        <img src={imgCard} alt="chat picture" />
      </StyledHomeWrapper>
    </>
  );
};
