import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoggingContext from "../contexts/LoggingContext";
import { actions } from "../Reduccers/AppReduccer";

function AdminPanel() {
  const { onClickHandler } = useContext(LoggingContext);

  let navigate = useNavigate();

  function handleClick() {
    onClickHandler({ type: actions.logoutAdmin });
    navigate("/");
  }

  return (
    <div>
      <span>Zalogowano na admina !</span>
      <div>
        <button
          className="btn btn-primary bg-secondary bg-gradient bg-opacity-25 text-dark border-0"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;
