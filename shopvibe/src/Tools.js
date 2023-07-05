import React from "react";
import "./Tools.css";
import Product from "./Product";

function Tools() {
  return (
    <div className="tools">
      <div className="tools__container">
        <div className="tools__row">
          <Product
            id="19"
            title="Example Product 13"
            price={49.99}
            image="/tools_img/product13.jpg"
            rating={4}
          />
          <Product
            id="20"
            title="Example Product 14"
            price={39.99}
            image="/tools_img/product14.jpg"
            rating={3}
          />
        </div>

        <div className="tools__row">
          <Product
            id="21"
            title="Example Product 15"
            price={29.99}
            image="/tools_img/product15.jpg"
            rating={5}
          />
          <Product
            id="22"
            title="Example Product 16"
            price={19.99}
            image="/tools_img/product16.jpg"
            rating={4}
          />
          <Product
            id="23"
            title="Example Product 17"
            price={9.99}
            image="/tools_img/product17.jpg"
            rating={3}
          />
        </div>

        <div className="tools__row">
          <Product
            id="24"
            title="Example Product 18"
            price={14.99}
            image="/tools_img/product18.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Tools;
