import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LoggingContext from "../contexts/LoggingContext";
import { actions } from "../reduccers/AppReduccer";

import Menu from "./Menu";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

function ContentAdminPanel() {
  const { onClickHandler } = useContext(LoggingContext);

  let navigate = useNavigate();

  function handleClickLogout() {
    onClickHandler({ type: actions.logoutAdmin });
    navigate("/");
  }

  return (
    <div className="row m-0">
      <div className="col-10">
        <button
          className="btn btn-primary bg-secondary bg-gradient bg-opacity-25 text-dark border-0"
          onClick={handleClickLogout}
        >
          Logout
        </button>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          {/* <Route path="/*" element={<Navigate to="/error" />} /> */}
        </Routes>
      </div>
      <div className="col-2 pe-0">
        <Menu />
      </div>
    </div>
  );
}

export default ContentAdminPanel;
