import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAutentification = () => {
    if (user) {
      auth.signOut();
    }
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
    // Adaugă mai multe categorii după nevoie
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      paddingLeft: 0,
    }),
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="/logo1.png" alt="Logo1" />
      </Link>
      <div className="header__search">
        <div className="header__category">
          <Select
            value={selectedOption}
            options={options}
            placeholder="All Categories"
            isSearchable={false}
            menuPlacement="auto"
            styles={customStyles}
            onChange={handleCategoryChange}
          />
        </div>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAutentification} className="header__options">
            <span className="header__optionLineOne">Hello, {user ? user.email : "Guest"}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__options">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <Link to="/Checkout">
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
