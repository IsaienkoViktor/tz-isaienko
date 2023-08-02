import { UserCard } from "../../components/UserCard/UserCard";
import arrow from "../../images/arrow.png";
import { ArrowStyled, NavArrow } from "./TweetsPage.styled";

export const TweetsPage = () => {
  return (
    <>
      <NavArrow to="/">
        <ArrowStyled src={arrow} width="48" height="48" alt="Back" />
      </NavArrow>
      <UserCard />;
    </>
  );
};
