import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (auth) {
          history.push("Login");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="register">
      <Link to="/">
        <img className="register__logo" src="/logo1.png" alt="Logo1" />
      </Link>

      <div className="register__form">
        <h1>New customer ?</h1>

        <p>Enter an email address and password.</p>

        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <div className="password__container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password__toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </span>
          </div>

          <button onClick={register} className="register__registerButton">
            Create your ShopVibe account
          </button>

          <h1 className="existent__user">Already a customer ?</h1>

          <Link to="/Login">
            <button className="register__signInButton">Sign In</button>
          </Link>
        </form>

        <p>
          ShopVibe, as a processing manager, processes the data collected for
          customer relationship management, order and delivery management,
          personalization of services, fraud prevention, marketing and targeted
          advertising. For more information, see the Policy of protection of
          your personal data.
        </p>
      </div>
    </div>
  );
}

export default Register;
