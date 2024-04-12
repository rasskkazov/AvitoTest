import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./app/router/routes";
import { Navigation } from "./widgets";

export const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <main className="main">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};
