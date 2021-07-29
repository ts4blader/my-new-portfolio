import React from "react";
import { ButtonImg } from "./Button";
import { MainData } from "../data/MainData";
import ACTION from "../Action";
import { StoreContext } from "../Store";
import Icon from "../components/Icon";
function Nav() {
  const [state, dispatch] = React.useContext(StoreContext);

  const closeNav = () => {
    dispatch({ type: ACTION.CLOSE_NAV });
    dispatch({ type: ACTION.HIDE_OVERLAY });
  };

  return (
    <nav className={state.openNav ? "nav open" : "nav"}>
      <div className="nav__close" onClick={closeNav}>
        <Icon src="close.png" alt="Close" />
      </div>
      <ul className="nav__links">
        {MainData.map((el) => (
          <li className={`${el.title}-nav nav__link`}>
            <a href={`#${el.title}`}>
              <ButtonImg img={el.img} />
            </a>
          </li>
        ))}
      </ul>
      <div className="nav__community">
        <a href="/">
          <ButtonImg img="github.png" />
        </a>
        <a href="/">
          <ButtonImg img="codepen.png" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
