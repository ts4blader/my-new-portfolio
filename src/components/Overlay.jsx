import React from "react";
import { StoreContext } from "../Store";
import ACTION from "../Action";

function Overlay() {
  const [state, dispatch] = React.useContext(StoreContext);

  const action = () => {
    dispatch({ type: ACTION.CLOSE_NAV });
    dispatch({ type: ACTION.HIDE_OVERLAY });
  };

  return (
    <div
      className={state.showOverlay ? "overlay show" : "overlay"}
      onClick={action}
    ></div>
  );
}

export default Overlay;
