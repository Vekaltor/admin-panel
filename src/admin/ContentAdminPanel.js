import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LoggingContext from "../contexts/LoggingContext";
import { actions } from "../reduccers/AppReduccer";

import Menu from "./Menu";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

import pathURL from "../PathURL";

function ContentAdminPanel() {
  return (
    <div className="row m-0">
      <div className="col-10">
        <Routes>
          <Route index element={<Home />} />
          <Route path={pathURL + "/users"} element={<Users />} />
          <Route path={pathURL + "/settings"} element={<Settings />} />
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
