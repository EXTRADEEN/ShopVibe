import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Register from "./Register";
import Electronics from "./Electronics";
import Sports from "./Sports";
import Tools from "./Tools";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NLqcuAKzWxq1E71MRlzQez8OzgqLb3GPGvKqQEsJgjFBld2peisA0B7a0M9vVpLbj2hRNYMCcIZ7bYXWemqhAJ300ZdbO7xcs"
);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    // runs once when the app component loads ...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/search">
            <Header />
            <SearchPage />
            <Footer />
          </Route>
          <Route path="/electronics">
            <Header />
            <Electronics />
            <Footer />
          </Route>
          <Route path="/sports">
            <Header />
            <Sports />
            <Footer />
          </Route>
          <Route path="/tools">
            <Header />
            <Tools />
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
