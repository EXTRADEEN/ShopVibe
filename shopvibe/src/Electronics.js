import React from "react";
import "./Electronics.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

const electronicsProducts = [
  {
    id: "7",
    title:
      "Garmin 010-02038-02 DriveSmart 65, Built-In Voice-Controlled GPS Navigator with 6.95” High-Res Display , Black",
    price: 177.99,
    image: "/electronics_img/garmin_gps.jpg",
    rating: 4,
  },
  {
    id: "8",
    title:
      "Rapsodo Mobile Launch Monitor for Golf Indoor and Outdoor Use with GPS Satellite View and Professional Level Accuracy, iPhone & iPad Only",
    price: 299.99,
    image: "/electronics_img/rapsodo.jpg",
    rating: 3,
  },
  {
    id: "9",
    title:
      "Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone",
    price: 149.99,
    image: "/electronics_img/airpods.jpg",
    rating: 5,
  },
  {
    id: "10",
    title:
      "Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray",
    price: 276.21,
    image: "/electronics_img/ipad.jpg",
    rating: 5,
  },
  {
    id: "11",
    title:
      "HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink (26K67A), white",
    price: 79.99,
    image: "/electronics_img/hpimpr.jpg",
    rating: 3,
  },
  {
    id: "12",
    title:
      "SAMSUNG EVO Select Micro SD-Memory-Card + Adapter, 256GB microSDXC 130MB/s Full HD & 4K UHD, UHS-I, U3, A2, V30, Expanded Storage for Android Smartphones, Tablets, Nintendo-Switch (MB-ME256KA/AM)",
    price: 17.99,
    image: "/electronics_img/sd.jpg",
    rating: 4,
  },
  {
    id: "25",
    title: "Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con™",
    price: 298.99,
    image: "/electronics_img/nintendo.jpg",
    rating: 5,
  },
  {
    id: "26",
    title:
      "VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model",
    price: 168.5,
    image: "/electronics_img/visio.jpg",
    rating: 3,
  },
  {
    id: "1",
    title: "Fitbit",
    price: 59.99,
    image: "/electronics_img/fitbit.png",
    rating: 3,
  },
  {
    id: "2",
    title: "Corsair K55",
    price: 29.99,
    image: "/electronics_img/corsair_keyboard.jpg",
    rating: 5,
  },
  {
    id: "3",
    title: "Samsung Galaxy Buds.jpg",
    price: 55.99,
    image: "/electronics_img/samsung_buds.jpg",
    rating: 4,
  },
  {
    id: "4",
    title: "Apple iPhone 14, 128GB, Midnightt",
    price: 659.99,
    image: "/electronics_img/Apple_iphone.jpg",
    rating: 5,
  },
  {
    id: "5",
    title:
      "MUSETEX ATX PC Case Pre-Install 6 PWM ARGB Fans, Mid Tower Gaming Case with Opening Tempered Glass Side Panel Door, Mesh Computer Case, TW8",
    price: 19.99,
    image: "/electronics_img/gaming_case.jpg",
    rating: 3,
  },
  {
    id: "6",
    title:
      "ASUS Vivobook 14 FHD Laptop Newest, Intel 12th Gen 6 Cores i3-1215U Up to 4.4 GHz, 20GB RAM 1TB SSD, Fingerprint,WiFi6, Windows 11, Blue +GM Accessories",
    price: 1250.85,
    image: "/electronics_img/asus.jpg",
    rating: 5,
  },
];

const firstRowProducts = electronicsProducts.slice(0, 4);
const secondRowProducts = electronicsProducts.slice(4, 8);
const thirdRowProducts = electronicsProducts.slice(8, 12);
const forthRowProducts = electronicsProducts.slice(12, 14);

const Electronics = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="electronics">
      <div className="electronics__container">
        <h1>
          <strong>Electronics Products</strong>
        </h1>
        <div className="electronics__row">
          {firstRowProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="electronics__row">
          {secondRowProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="electronics__row">
          {thirdRowProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="electronics__row">
          {forthRowProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
export { electronicsProducts };
