import { useDispatch, useSelector } from "react-redux";
import { selectFilter, selectUsers } from "../../redux/userSelector";
import {
  CardAvatar,
  CardButton,
  CardButtonLoadMore,
  CardDivLine,
  CardFollowers,
  CardImage,
  CardItem,
  CardLabel,
  CardList,
  CardLogo,
  CardName,
  CardTweet,
  CardWrapper,
} from "./UserCard.styled";
import logo from "/src/project_svg/logo.svg";
import imgCard from "../../project_svg/img@1x.png";
import imgCardRetina from "../../project_svg/img@2x.png";
import { useState } from "react";
import { editUserThunk, getUserThunk } from "../../redux/userThunk";
import { setFilter } from "../../redux/userSlice";

export const UserCard = () => {
  const dispatch = useDispatch();
  const [cardItems, setCardItems] = useState(3);
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);

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
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="follow">Follow</option>
            <option value="following">Following</option>
          </select>
        </CardLabel>
        <CardList>
          {filteredUsers
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
      </CardWrapper>
      {cardItems < filteredUsers.length && (
        <CardButtonLoadMore type="button" onClick={handleLOadMore}>
          Load More
        </CardButtonLoadMore>
      )}
    </>
  );
};