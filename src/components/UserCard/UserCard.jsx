import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectUsers } from "../../redux/userSelector";
import {
  CardAvatar,
  CardButton,
  CardButtonLoadMore,
  CardDivLine,
  CardEmpty,
  CardFollowers,
  CardImage,
  CardItem,
  CardLabel,
  CardList,
  CardLogo,
  CardName,
  CardTweet,
  CardWrapper,
  StyledOption,
  StyledSelect,
} from "./UserCard.styled";
import logo from "/src/images/logo.svg";
import imgCard from "../../images/img@1x.png";
import imgCardRetina from "../../images/img@2x.png";
import imgW from "../../images/imgW@1x.webp";
import imgWRetina from "../../images/imgWRetina@2x.webp";
import { useEffect, useState } from "react";
import { editUserThunk, getUserThunk } from "../../redux/userThunk";
import { setFilter } from "../../redux/userSlice";

export const UserCard = () => {
  const dispatch = useDispatch();
  const [cardItems, setCardItems] = useState(3);
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  const handleLOadMore = () => {
    setCardItems((prevCardItems) => prevCardItems + 3);
  };

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

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
    setCardItems(3);
  };

  const filteredUsers = users.filter((user) => {
    if (filter === "all") return true;
    if (filter === "follow") return !user.following;
    if (filter === "following") return user.following;
    return true;
  });

  return (
    <>
      <CardWrapper>
        <CardLabel>
          <StyledSelect value={filter} onChange={handleFilterChange}>
            <StyledOption value="all">All</StyledOption>
            <StyledOption value="follow">Follow</StyledOption>
            <StyledOption value="following">Following</StyledOption>
          </StyledSelect>
        </CardLabel>
        {filteredUsers.length === 0 ? (
          <CardEmpty>No tweets here for now ... </CardEmpty>
        ) : (
          <CardList>
            {filteredUsers
              .slice(0, cardItems)
              .map(
                ({
                  user,
                  followers,
                  tweets,
                  avatar,
                  id,
                  following = false,
                }) => {
                  return (
                    <CardItem key={id}>
                      <a
                        href="https://goit.global/ua-ru/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="goit main page"
                      >
                        <CardLogo src={logo} />
                      </a>
                      <CardImage>
                        <source
                          srcSet={`${imgCard} 1x, ${imgCardRetina} 2x`}
                          type="image/png"
                        ></source>
                        <source
                          srcSet={`${imgW} 1x, ${imgWRetina} 2x`}
                          type="image/webp"
                        ></source>
                        <img src={imgCard} alt="chat image" />
                      </CardImage>
                      <div>
                        <CardDivLine>
                          <CardAvatar src={avatar} />
                        </CardDivLine>
                      </div>
                      <CardName>{user}</CardName>
                      <CardTweet>tweets {tweets} </CardTweet>
                      <CardFollowers>
                        followers {followers.toLocaleString("en-US")}
                      </CardFollowers>
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
        )}
      </CardWrapper>
      {cardItems < filteredUsers.length && (
        <CardButtonLoadMore type="button" onClick={handleLOadMore}>
          Load More
        </CardButtonLoadMore>
      )}
    </>
  );
};
