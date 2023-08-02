import { styled } from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const CardLabel = styled.label`
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 36px;
  align-items: center;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;
`;

export const CardItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
`;

export const CardLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  transition: transform 150ms ease-in-out;
  &:focus,
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  margin-top: 10px;
  margin-bottom: 68px;
`;

export const CardDivLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 0%;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

export const CardAvatar = styled.img`
  border: 10px solid #ebd8ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

export const CardName = styled.span`
  font-weight: 600;
`;

export const CardTweet = styled.span``;

export const CardFollowers = styled.span``;

export const CardButtonLoadMore = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 36px;
  display: flex;
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10.311px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  transition: transform 150ms ease-in-out;
  &:focus,
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const CardButton = styled.button`
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: #373737;
  display: flex;
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10.311px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  transition: transform 150ms ease-in-out;
  &:focus,
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
