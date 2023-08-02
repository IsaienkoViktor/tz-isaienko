import { styled } from "styled-components";

export const StyledHomeWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
`;

export const StyledHomeText = styled.span`
  text-transform: capitalize;
  font-size: 32px;
`;

export const StyledHomeButton = styled.button`
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
  transition: all 150ms ease-in-out;
  &:focus,
  &:hover {
    background-color: #5cd3a8;
    cursor: pointer;
    transform: scale(1.03);
  }
`;
