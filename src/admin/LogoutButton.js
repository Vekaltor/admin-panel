import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoggingContext from "../contexts/LoggingContext";
import { actions } from "../reduccers/AppReduccer";

function LogoutButton() {
  const { onClickHandler } = useContext(LoggingContext);

  let navigate = useNavigate();

  function handleClickLogout() {
    onClickHandler({ type: actions.logoutAdmin });
    navigate("/");
  }
  return (
    <button
      className="btn btn-primary bg-secondary bg-gradient bg-opacity-25 text-dark border-0"
      onClick={handleClickLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
