import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/userSelector";
import { CardList, CardWrapper } from "./Card.styled";

export const Card = () => {
  const users = useSelector(selectUsers);

  return (
    <>
      <CardWrapper>
        <CardList>
          {users.map(({ user, followers, tweets, avatar, id }) => {
            return (
              <li key={id}>
                <img src={avatar} />
                <span>{user}</span>
                <span>{followers}</span>
                <span>{tweets}</span>
                <button type="button">Follow</button>
              </li>
            );
          })}
        </CardList>
      </CardWrapper>
    </>
  );
};
