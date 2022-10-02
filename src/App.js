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
import reducer from "./Reduccers/AppReduccer";

function App() {
  const [state, dispatch] = useReducer(reducer, { isAdminLogged: false });

  return (
    <LoggingContext.Provider
      value={{
        isAdminLogged: state.isAdminLogged,
        onClickHandler: dispatch,
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
