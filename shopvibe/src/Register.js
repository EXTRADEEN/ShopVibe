import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

function Register() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (name && email && password && address && country && phone && city) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(userCredential);

          addDoc(collection(db, "users"), {
            name: name,
            email: email,
            phone: phone,
            address: address,
            country: country,
            city: city,
          })
            .then(() => {
              console.log("Document successfully written!");
              history.push("/login");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <img className="register__logo" src="/logo1.png" alt="Logo1" />
      </Link>

      <div className="register__form">
        <h1>New customer?</h1>

        <p>Please fill in the fields below to register.</p>

        <form>
          <h5>Full Name</h5>
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

          <h5>Phone Number</h5>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <h5>Address</h5>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <h5>Country</h5>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <h5>City</h5>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
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

          <h1 className="existent__user">Already a customer?</h1>

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
