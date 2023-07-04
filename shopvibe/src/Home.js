import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="slide__image" src="/home_img/home1.png" alt="" />

        <div className="home__row">
          <Product
            id="1"
            title="Fitbit"
            price={59.99}
            image="/home_img/fitbit.png"
            rating={3}
          />
          <Product
            id="2"
            title="Corsair K55"
            price={29.99}
            image="/home_img/corsair_keyboard.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Samsung Galaxy Buds.jpg"
            price={55.99}
            image="/home_img/samsung_buds.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Apple iPhone 14, 128GB, Midnightt"
            price={659.99}
            image="/home_img/Apple_iphone.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="MUSETEX ATX PC Case Pre-Install 6 PWM ARGB Fans, Mid Tower Gaming Case with
            Opening Tempered Glass Side Panel Door, Mesh Computer Case, TW8"
            price={19.99}
            image="/home_img/gaming_case.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="ASUS Vivobook 14 FHD Laptop Newest, Intel 12th Gen 6 Cores i3-1215U Up to 4.4 GHz,
            20GB RAM 1TB SSD, Fingerprint,WiFi6, Windows 11, Blue +GM Accessories"
            price={1250.85}
            image="/home_img/asus.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
