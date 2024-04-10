import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../app/router/constants";
import { Button } from "@vkontakte/vkui";
import { Icon28Menu } from "@vkontakte/icons";
import "./navigation.scss";

export const Navigation = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => setIsMenuActive((cur) => !cur);

  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <button className="navigation__menu" onClick={toggleMenu}>
          <Icon28Menu />
        </button>

        <div
          className={`navigation__elements ${
            isMenuActive ? "navigation__elements--active" : ""
          }`}
        >
          <NavLink to={ROUTES.HOME}>Все фильмы</NavLink>
          <NavLink to={ROUTES.RANDOM_MOVIE}>Случайный фильм</NavLink>
        </div>

        <div className="navigation__login">
          <Button> Войти</Button>
        </div>
      </div>
    </nav>
  );
};
