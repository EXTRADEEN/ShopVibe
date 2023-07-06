import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Dropdown from "react-dropdown-select";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";

function Header() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  const options = [
    { value: "electronics", label: "Electronics" },
    { value: "sports", label: "Sports and Outdoors" },
    { value: "tools", label: "Tools & Home Improvement" },
  ];

  const handleCategoryChange = useCallback((selectedOption) => {
    if (selectedOption) {
      setSelectedOption(selectedOption);
      const category = selectedOption[0].value;
      let categoryUrl = "";

      if (category === "electronics") {
        categoryUrl = "/electronics";
      } else if (category === "sports") {
        categoryUrl = "/sports";
      } else if (category === "tools") {
        categoryUrl = "/tools";
      }

      if (categoryUrl !== "") {
        history.push(categoryUrl);
      }
    } else {
      setSelectedOption(null);
    }
  }, [history]);

  const handleSearch = () => {
    console.log("Cuvântul căutat:", searchTerm);
    history.push(`/search?search=${searchTerm}`);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      snapshot.forEach((doc) => {
        if (user && doc.data().email === user.email) {
          dispatch({
            type: "SET_USER",
            user: { ...user, displayName: doc.data().name },
          });
        }
      });
    });

    return () => {
      unsubscribe();
    };
  }, [user, dispatch]);

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="/logo1.png" alt="Logo1" />
      </Link>
      <div className="header__search">
        <Dropdown
          className="header__category "
          value={selectedOption}
          options={options}
          placeholder="All Categories"
          searchable={false}
          direction="left"
          onChange={handleCategoryChange}
        />
        <input
          className="header__searchInput"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <SearchIcon className="header__searchIcon" onClick={handleSearch} /> 
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__options">
            <span className="header__optionLineOne">
              Hello, {user ? user.displayName || user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTree header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
