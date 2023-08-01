import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
