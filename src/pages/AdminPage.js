import { useContext } from "react";

import Login from "../components/Login";
import AdminPanel from "../components/AdminPanel";
import LoggingContext from "../contexts/LoggingContext";

function AdminPage() {
  const { isAdminLogged } = useContext(LoggingContext);

  let permission = isAdminLogged;

  const componentAfterAuthorized = permission ? <AdminPanel /> : <Login />;

  return <div className="h-100 d-flex">{componentAfterAuthorized}</div>;
}

export default AdminPage;
