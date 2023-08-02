import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Navigation } from "../Navigation/Navigation";
import { HeaderStyled } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <Navigation />
      </HeaderStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
