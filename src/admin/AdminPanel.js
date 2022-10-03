import { useContext, useEffect, useState } from "react";

import LoggingContext from "../contexts/LoggingContext";
import { actions } from "../reduccers/AppReduccer";

import LoadingPage from "../components/LoadingPage";
import ContentAdminPanel from "./ContentAdminPanel";

function AdminPanel() {
  const { data, dataAdmin, onLoadHandler } = useContext(LoggingContext);

  const [isLoadingPage, setIsLoadingPage] = useState(!dataAdmin);

  const asyncFetch = async () => {
    await fetchAsyncDataAdmin();
    onLoadHandler({ type: actions.fetchDataAdmin, payload: data });
    setIsLoadingPage(false);
  };

  const fetchAsyncDataAdmin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  useEffect(() => {
    if (!dataAdmin) asyncFetch();
  }, []);

  const componentByAfterAndBeforeLoading = isLoadingPage ? (
    <LoadingPage />
  ) : (
    <ContentAdminPanel />
  );

  return (
    <div className="admin-page-height">
      {/* <span>Logged on to the admin !</span> */}
      {componentByAfterAndBeforeLoading}
    </div>
  );
}

export default AdminPanel;
