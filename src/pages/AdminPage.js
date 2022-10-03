import { useContext } from "react";

import Login from "../components/Login";
import AdminPanel from "../admin/AdminPanel";
import LoggingContext from "../contexts/LoggingContext";

function AdminPage() {
  const { isAdminLogged } = useContext(LoggingContext);

  let permission = isAdminLogged;

  const componentAfterAuthorized = permission ? <AdminPanel /> : <Login />;

  return (
    <div className="admin-page overflow-hidden">{componentAfterAuthorized}</div>
  );
}

export default AdminPage;
