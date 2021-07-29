import React from "react";
import { ButtonText, ButtonImg } from "./Button";
import { StoreContext } from "../Store";
import ACTION from "../Action";
import Icon from "../components/Icon";

function Header() {
  const [state, dispatch] = React.useContext(StoreContext);

  const openNav = () => {
    dispatch({ type: ACTION.OPEN_NAV });
    dispatch({ type: ACTION.SHOW_OVERLAY });
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/">
            <ButtonText text="3T" />
          </a>
        </div>
        <div className="header__community">
          <a href="https://github.com/ts4blader?tab=repositories">
            <ButtonImg img="github.png" />
          </a>
          <a href="https://codepen.io/your-work">
            <ButtonImg img="codepen.png" />
          </a>
        </div>
        <div className="header__menu" onClick={openNav}>
          <Icon src="menu.png" alt="menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
