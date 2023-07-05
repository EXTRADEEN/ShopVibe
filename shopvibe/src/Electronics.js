import React from "react";
import "./Electronics.css";
import Product from "./Product";

function Electronics() {
  return (
    <div className="electronics">
      <div className="electronics__container">
        <div className="electronics__row">
          <Product
            id="7"
            title="Mouse"
            price={99.99}
            image="/electronics_img/product1.jpg"
            rating={4}
          />
          <Product
            id="8"
            title="Example Product 2"
            price={49.99}
            image="/electronics_img/product2.jpg"
            rating={3}
          />
        </div>

        <div className="electronics__row">
          <Product
            id="9"
            title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone"
            price={149.99}
            image="/electronics_img/product3.jpg"
            rating={5}
          />
          <Product
            id="10"
            title="Example Product 4"
            price={199.99}
            image="/electronics_img/product4.jpg"
            rating={4}
          />
          <Product
            id="11"
            title="Example Product 5"
            price={79.99}
            image="/electronics_img/product5.jpg"
            rating={3}
          />
        </div>

        <div className="electronics__row">
          <Product
            id="12"
            title="Example Product 6"
            price={129.99}
            image="/electronics_img/product6.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Electronics;
