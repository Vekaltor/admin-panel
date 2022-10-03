import { Route, Routes, Navigate } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

function Main() {
  return (
    <main className="container-fluid px-0">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/user" exact element={<UserPage />} />
        <Route path="/admin/*" exact element={<AdminPage />} />
        {/* <Route path="*" element={<Navigate to="/error" />} /> */}
      </Routes>
    </main>
  );
}

export default Main;
