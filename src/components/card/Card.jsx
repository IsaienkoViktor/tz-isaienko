import { useDispatch, useSelector } from "react-redux";
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
import { editUserThunk, getUserThunk } from "../../redux/userThunk";

export const Card = () => {
  const dispatch = useDispatch();
  const [cardItems, setCardItems] = useState(3);
  const users = useSelector(selectUsers);

  const handleFollowClick = (id, followers, following) => {
    if (following) {
      dispatch(
        editUserThunk({
          id,
          user: {
            following: false,
            followers: followers + 1,
          },
        })
      ).then(() => dispatch(getUserThunk()));
    } else {
      dispatch(
        editUserThunk({
          id,
          user: {
            following: true,
            followers: followers - 1,
          },
        })
      ).then(() => dispatch(getUserThunk()));
    }
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
            .map(
              ({ user, followers, tweets, avatar, id, following = false }) => {
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
                        backgroundColor: following ? "#5CD3A8" : "#EBD8FF",
                      }}
                      onClick={() =>
                        handleFollowClick(id, followers, following)
                      }
                    >
                      {following ? "Following" : "Follow"}
                    </CardButton>
                  </CardItem>
                );
              }
            )}
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
