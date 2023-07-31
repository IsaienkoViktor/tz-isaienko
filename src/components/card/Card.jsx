import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/userSelector";
import {
  CardAvatar,
  CardButton,
  CardButtonLoadMore,
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
import { useState } from "react";

export const Card = () => {
  const [cardItems, setCardItems] = useState(3);
  const [follower, setFollower] = useState(false);
  const users = useSelector(selectUsers);

  const [followersCounter, setFollowersCounter] = useState(users.followers);

  const handleClickFollowing = () => {
    if (follower) {
      setFollowersCounter(followersCounter - 1);
    } else {
      setFollowersCounter(followersCounter + 1);
    }

    setFollower(!follower);
  };

  const handleAddFollower = (id) => {
    const updatingUserFollowers = users.find((user) => user.id === id);
  };

  const handleLOadMore = () => {
    setCardItems((prevCardItems) => prevCardItems + 3);
  };

  return (
    <>
      <CardWrapper>
        <CardList>
          {users
            .slice(0, cardItems)
            .map(({ user, followers, tweets, avatar, id }) => {
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
                  <CardButton
                    type="button"
                    style={{
                      backgroundColor: follower ? "#5CD3A8" : "#EBD8FF",
                    }}
                    onClick={handleClickFollowing}
                  >
                    {follower ? "Following" : "Follow"}
                  </CardButton>
                </CardItem>
              );
            })}
        </CardList>
      </CardWrapper>
      {cardItems < users.length && (
        <CardButtonLoadMore type="button" onClick={handleLOadMore}>
          Load More
        </CardButtonLoadMore>
      )}
    </>
  );
};
