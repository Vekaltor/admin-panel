import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import { useReducer } from "react";

import LoggingContext from "./contexts/LoggingContext";
import reducer, { initialState } from "./reduccers/AppReduccer";

const data = {
  users: [
    { id: 0, login: "admin", pass: "admin", permission: "admin" },
    { id: 1, login: "user", pass: "user", permission: "user" },
  ],
  list: [
    { id: 0, content: "First" },
    { id: 1, content: "Second" },
  ],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoggingContext.Provider
      value={{
        data: data,
        dataAdmin: state.dataAdmin,
        isAdminLogged: state.isAdminLogged,
        onClickHandler: dispatch,
        onLoadHandler: dispatch,
      }}
    >
      <Router>
        <div className="grid text-center">
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route path="/error" exact element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </LoggingContext.Provider>
  );
}

export default App;
