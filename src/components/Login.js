import { useContext, useState } from "react";

import { actions } from "../reduccers/AppReduccer";

import LoggingContext from "../contexts/LoggingContext";
import IncorrectData from "./IncorrectData";

const data = { login: "admin", pass: "admin" };

function Login() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [incorrectData, setIncorrectData] = useState(false);

  const { onClickHandler } = useContext(LoggingContext);

  function handleChangeLogin(target) {
    setLogin(target.value);
  }

  function handleChangePass(target) {
    setPass(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleFocus() {
    setIncorrectData(false);
  }

  function handleClick() {
    validate();
  }

  function validate() {
    if (data.login === login && data.pass === pass) correctValidate();
    else incorrectValidate();
  }

  function correctValidate() {
    onClickHandler({ type: actions.loggingAdmin });
  }

  function incorrectValidate() {
    clearData();
    setIncorrectData(true);
  }

  function clearData() {
    setPass("");
    setLogin("");
  }

  const incorrectDataComponent = incorrectData ? <IncorrectData /> : null;

  return (
    <div className="row m-auto mt-5" style={{ width: 300, height: 400 }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="my-4 row">
          <label className="col-sm-4 col-form-label text-start" htmlFor="login">
            login:
          </label>
          <div className="col-sm">
            <input
              type="text"
              className="form-control form-control-sm"
              id="login"
              value={login}
              onChange={(e) => handleChangeLogin(e.target)}
              onFocus={handleFocus}
            />
          </div>
        </div>
        <div className="mb-5 row">
          <label className="col-sm-4 col-form-label text-start" htmlFor="pass">
            password:
          </label>
          <div className="col-sm">
            <input
              type="password"
              className="form-control form-control-sm"
              id="pass"
              value={pass}
              onChange={(e) => handleChangePass(e.target)}
              onFocus={handleFocus}
            />
          </div>
        </div>
        <button className="btn btn-dark px-4 py-1" onClick={handleClick}>
          Login
        </button>
      </form>
      {incorrectDataComponent}
    </div>
  );
}

export default Login;
