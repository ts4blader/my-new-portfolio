import ACTION from "./Action";

export default function Reducer(state, action) {
  switch (action.type) {
    case ACTION.OPEN_NAV:
      return { ...state, openNav: true };
    case ACTION.CLOSE_NAV:
      return { ...state, openNav: false };
    case ACTION.SHOW_OVERLAY:
      return { ...state, showOverlay: true };
    case ACTION.HIDE_OVERLAY:
      return { ...state, showOverlay: false };
    default:
      alert("Action is not valid");
  }
}
