import { Route, Routes, Navigate } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

import pathURL from "../PathURL";

function Main() {
  return (
    <main className="container-fluid px-0">
      <Routes>
        <Route path={pathURL + "/"} exact element={<HomePage />} />
        <Route path={pathURL + "/user"} exact element={<UserPage />} />
        <Route path={pathURL + "/admin/*"} exact element={<AdminPage />} />
        {/* <Route path="*" element={<Navigate to="/error" />} /> */}
      </Routes>
    </main>
  );
}

export default Main;
