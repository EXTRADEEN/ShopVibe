import React from "react";
import "./Sports.css";
import Product from "./Product";

function Sports() {
  return (
    <div className="sports">
      <div className="sports__container">
        <div className="sports__row">
          <Product
            id="13"
            title="Example Product 7"
            price={29.99}
            image="/sports_img/product7.jpg"
            rating={4}
          />
          <Product
            id="14"
            title="Example Product 8"
            price={19.99}
            image="/sports_img/product8.jpg"
            rating={3}
          />
        </div>

        <div className="sports__row">
          <Product
            id="15"
            title="Example Product 9"
            price={39.99}
            image="/sports_img/product9.jpg"
            rating={5}
          />
          <Product
            id="16"
            title="Example Product 10"
            price={49.99}
            image="/sports_img/product10.jpg"
            rating={4}
          />
          <Product
            id="17"
            title="Example Product 11"
            price={59.99}
            image="/sports_img/product11.jpg"
            rating={3}
          />
        </div>

        <div className="sports__row">
          <Product
            id="18"
            title="Example Product 12"
            price={24.99}
            image="/sports_img/product12.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Sports;
