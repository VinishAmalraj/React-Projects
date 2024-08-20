import React, { useRef, useState } from "react";
import "./Login.css";
import { ImCancelCircle } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const refer = useRef(null);
  const refer1 = useRef(null);
  const navigate = useNavigate();

  const validateInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = () => {
    return password.length >= 4 && password.length <= 60;
  };

  const Changehandle = (e) => {
    setInput(e.target.value);
    hideWarnings();
  };

  const Changehandle1 = (e) => {
    setPassword(e.target.value);
    hideWarnings();
  };

  const hideWarnings = () => {
    refer.current.style.display = "none";
    refer1.current.style.display = "none";
  };

  const sign = () => {
    if (!validateInput() || !validatePassword()) {
      if (!validateInput()) {
        refer.current.style.display = "inline";
      }
      if (!validatePassword()) {
        refer1.current.style.display = "inline";
      }
    } else {
      setInput("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="headcontainer">
      <Link to="/">
        <img
          id="logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <div className="login-header">
          <h1>Sign In</h1>
          <div className="login-inputs">
            <div className="phonebox">
              <input
                type="text"
                id="Email"
                value={input}
                required
                onChange={Changehandle}
              />
              <div className="labelline">Email or phone number</div>
            </div>

            <div ref={refer} className="Warnning">
              <p>
                <ImCancelCircle /> Please enter a valid email address or phone
                number
              </p>
            </div>

            <div className="phonebox">
              <input
                type="password"
                id="password"
                value={password}
                required
                onChange={Changehandle1}
              />
              <div className="labelline">Password</div>
            </div>

            <div ref={refer1} className="Warnning1">
              <p>
                <ImCancelCircle /> Your password must contain between 4 and 60
                characters.
              </p>
            </div>

            <button type="submit" onClick={sign} id="sign-in-btn">
              Sign In
            </button>
          </div>
          <div className="login-sign-in">
            <p>OR</p>
            <button id="Code-btn">Use a sign-code </button>
            <a href="/Login">Forget password</a>
          </div>
          <div className="login-remeber">
            <input type="checkbox" id="Remeber-chk" />
            <span> Remeber me</span>
            <p>
              New to Netflix?<a href="/Login">Sign up now</a>
            </p>
          </div>
        </div>
        <div className="login-footer">
          <p>
            Questions? Call <a href="tel:+000-000-000-0000">000-000-000-0000</a>
          </p>
          <div className="foot-content">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href="">FAQ</a>
                  </td>
                  <td>
                    <a href="">Help Centre</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Terms of Use</a>
                  </td>
                  <td>
                    <a href="">Privacy</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">Cookie Preference</a>
                  </td>
                  <td>
                    <a href="">Corporate Information</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
