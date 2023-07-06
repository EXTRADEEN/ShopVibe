import React from "react";
import "./Sports.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

const sportsProducts = [
  {
    id: "13",
    title:
      "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids, Adjustable Steel Jump Rope Workout with Foam Handles for Fitness, Home Exercise & Slim Body",
    price: 7.19,
    image: "/sports_img/jump_rope.jpg",
    rating: 4,
  },
  {
    id: "14",
    title:
      "LHKNL Headlamp Flashlight, 1200 Lumen Ultra-Light Bright LED Rechargeable Headlight with White Red Light, 2-Pack Waterproof Motion Sensor Head Lamp,8 Modes for Outdoor Camping Running Cycling Fishing",
    price: 19.99,
    image: "/sports_img/head_lamp.jpg",
    rating: 4,
  },
  {
    id: "15",
    title:
      "ALLPAIPAI Swim Goggles - Swimming Goggles,Pack of 2 Professional Anti Fog No Leaking UV Protection Wide View Swim Goggles For Women Men Adult Youth Kids",
    price: 9.59,
    image: "/sports_img/swim_googles.jpg",
    rating: 5,
  },
  {
    id: "16",
    title:
      "SPORTBIT Ball Pump with 5 Needles - Push & Pull Inflating System - Great for All Sports Balls - Volleyball Pump, Basketball Inflator, Football & Soccer Ball Air Pump - Goes with Needles Set",
    price: 10.99,
    image: "/sports_img/pump.jpg",
    rating: 3,
  },
  {
    id: "17",
    title:
      "Whatafit Resistance Bands Set, Exercise Bands with Door Anchor, Handles, Carry Bag, Legs Ankle Straps for Resistance Training, Physical Therapy, Home Workouts",
    price: 22.97,
    image: "/sports_img/band.jpg",
    rating: 3,
  },
  {
    id: "18",
    title:
      "Shibumi Shade®, World's Best Beach Shade, The Original Wind-Powered® Beach Canopy, Provides 150 Sq. Ft. of Shade, Compact & Easy to Carry, Sets up in 3 Minutes, Designed & Sewn in America",
    price: 270.59,
    image: "/sports_img/shade.jpg",
    rating: 5,
  },
  {
    id: "27",
    title: "Adidas Unisex Alliance 2 Sackpack, Black, One Size",
    price: 20.4,
    image: "/sports_img/backpack.jpg",
    rating: 4,
  },
  {
    id: "28",
    title:
      "Vinsguir Ab Roller Wheel, Abs Workout Equipment for Abdominal & Core Strength Training, Exercise Wheels for Home Gym, Fitness Equipment for Core Workout with Knee Pad Accessories",
    price: 25.99,
    image: "/sports_img/roller.jpg",
    rating: 3,
  },
  {
    id: "29",
    title:
      "Franklin Sports Badminton Racket + Birdie Set - Replacement Badminton Equipment for Kids + Adults - 2 Player - 4 Player Badminton Racket Sets",
    price: 9.09,
    image: "/sports_img/badminton.jpg",
    rating: 4,
  },
  {
    id: "30",
    title:
      "Coleman Chiller Series 16qt Insulated Portable Cooler, Ice Retention Hard Cooler with Heavy Duty Handle",
    price: 22.59,
    image: "/sports_img/cooler.jpg",
    rating: 5,
  },
  {
    id: "31",
    title:
      "Niceday Steppers for Exercise, Stair Stepper with Resistance Bands, Mini Stepper with 300LBS Loading Capacity, Hydraulic Fitness Stepper with LCD Monitor",
    price: 69.99,
    image: "/sports_img/fitness.jpg",
    rating: 4,
  },
  {
    id: "32",
    title:
      "Pickleball Paddles, USAPA Approved Fiberglass Surface Pickleball Set with Pickleball Rackets, Pickle Ball Paddle Set ​for Men Women",
    price: 59.99,
    image: "/sports_img/pickle.jpg",
    rating: 4,
  },
];

const firstRowProducts = sportsProducts.slice(0, 4);
const secondRowProducts = sportsProducts.slice(4, 8);
const thirdRowProducts = sportsProducts.slice(8, 12);

const Sports = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="sports">
      <div className="sports__container">
        <h1>
          <strong>Sports Products</strong>
        </h1>
        <div className="sports__row">
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
        <div className="sports__row">
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
        <div className="sports__row">
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
      </div>
    </div>
  );
};

export default Sports;
export { sportsProducts };
