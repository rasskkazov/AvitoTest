import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";

import { Home } from "../../pages";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.MOVIE} element={<></>} />
      <Route path={ROUTES.RANDOM_MOVIE} element={<></>} />
    </Routes>
  );
};
