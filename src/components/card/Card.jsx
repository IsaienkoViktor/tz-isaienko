import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/userSelector";
import {
  CardAvatar,
  CardButton,
  CardDivLine,
  CardFollowers,
  CardImage,
  CardItem,
  CardList,
  CardLogo,
  CardName,
  CardTweet,
  CardWrapper,
} from "./Card.styled";
import logo from "/src/project_svg/logo.svg";
import imgCard from "../../project_svg/img@1x.png";
import imgCardRetina from "../../project_svg/img@2x.png";

export const Card = () => {
  const users = useSelector(selectUsers);

  return (
    <>
      <CardWrapper>
        <CardList>
          {users.map(({ user, followers, tweets, avatar, id }) => {
            return (
              <CardItem key={id}>
                <a href="">
                  <CardLogo src={logo} />
                </a>
                <CardImage srcSet={`${imgCard} 1x, ${imgCardRetina} 2x`} />
                <div>
                  <CardDivLine>
                    <CardAvatar src={avatar} />
                  </CardDivLine>
                </div>
                <CardName>{user}</CardName>
                <CardTweet>tweets {tweets} </CardTweet>
                <CardFollowers>followers {followers} </CardFollowers>
                <CardButton type="button">Follow</CardButton>
              </CardItem>
            );
          })}
        </CardList>
      </CardWrapper>
    </>
  );
};
