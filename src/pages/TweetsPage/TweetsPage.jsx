import { NavLink } from "react-router-dom";
import { UserCard } from "../../components/UserCard/UserCard";

export const TweetsPage = () => {
  return (
    <>
      <NavLink to="/">Back</NavLink>
      <UserCard />;
    </>
  );
};
