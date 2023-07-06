import React from "react";
import "./Tools.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

const toolsProducts = [
  {
    id: "19",
    title: "Cartman 39 Piece Tool Set General Household Hand Kit with Plastic Toolbox Storage Case Orange",
    price: 18.69,
    image: "/tools_img/cartman.jpg",
    rating: 4
  },
  {
    id: "20",
    title: "Impact Socket Adapter Set Tools for Men 3-Piece 1/4 3/8 1/2 Socket Wrench Extension Drill Adapter Bit Set Christmas Stocking Stuffers Cool Gadgets for Men",
    price: 10.99,
    image: "/tools_img/impact.jpg",
    rating: 3
  },
  {
    id: "21",
    title: "MOTOPOWER MP69033 Car OBD2 Scanner Code Reader Engine Fault Code Reader Scanner CAN Diagnostic Scan Tool for All OBD II Protocol Cars Since 1996, Yellow",
    price: 29.99,
    image: "/tools_img/scaner.jpg",
    rating: 5
  },
  {
    id: "22",
    title: "jar-owl Power Tools Combo Kit Tool Set with 60pcs Accessories Toolbox and 16.8V Cordless Drill Set for Home Cordless Repair Tool Kit",
    price: 69.88,
    image: "/tools_img/combo.jpg",
    rating: 4
  },
  {
    id: "23",
    title: "GALAX PRO 3.5A 6 Variable Speed Oscillating Multi Tool Kit with Quick Clamp System Change and 30pcs Accessories, Oscillating Angle:4° for Cutting, Sanding, Grinding",
    price: 51.99,
    image: "/tools_img/galax.jpg",
    rating: 3
  },
  {
    id: "24",
    title: "WAKYME 21V MAX Cordless Impact Wrench Kit, 1/2 Brushless Compact Wrench Power Tool Kit, TWO 4.0AH Li-ion Battery, 7Pcs Driver Impact Sockets, Fast Charger, Belt clip, Tool Box (250 Ft-lb Torque)",
    price: 145.99,
    image: "/tools_img/impact1.jpg",
    rating: 5
  },
  {
    id: "33",
    title: "The Ryker Bag Tool Organizers - Small Tool Bag W/Detachable Pouches, Heavy Duty Roll Up Tool Bag Organizer : 6 Tool Pouches - Gifts for him Tool Roll Organizer For Mechanic, Electrician & Hobbyist",
    price: 35.99,
    image: "/tools_img/bag.jpg",
    rating: 4
  },
  {
    id: "34",
    title: "SWANLAKE 118PCS Magnetic Screwdrivers Set With Plastic Ranking,Tools For Men",
    price: 29.59,
    image: "/tools_img/screw.jpg",
    rating: 4
  },
  {
    id: "35",
    title: "AKKTOL Rivet Nut Tool, Rivnut Tool Kit Heavy Duty 16”, Nutsert Tool Kit with 15PCS Metric/SAE Mandrels 125 PCS Rivet Nuts and Carrying Case For Entry Level and Professional Use",
    price: 64.63,
    image: "/tools_img/rivet.jpg",
    rating: 4
  },
  {
    id: "36",
    title: "Klein Tools ET310 AC Circuit Breaker Finder, Electric Tester With Integrated GFCI Outlet Tester",
    price: 49.97,
    image: "/tools_img/tester.jpg",
    rating: 4  },
  {
    id: "37",
    title: "DEWALT 20V MAX Tire Inflator, Compact and Portable, Automatic Shut Off, LED Light, Bare Tool Only (DCC020IB)",
    price: 104.33,
    image: "/tools_img/dewalt.jpg",
    rating: 4
  },
  {
    id: "38",
    title: "KAFAHOM Power Tool Organizer-8 Drill Holder Wall Mount,4 Layer Heavy Duty Metal Power Tool Storage Rack,Garage Tool Organizer and Storage with Screwdriver Holder/Plier Holder/Hammer Holder",
    price: 69.99,
    image: "/tools_img/organizer.jpg",
    rating: 5
  }
];

const firstRowProducts = toolsProducts.slice(0, 4);
const secondRowProducts = toolsProducts.slice(4, 8);
const thirdRowProducts = toolsProducts.slice(8, 12);

const Tools = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="tools">
      <div className="tools__container">
      <h1><strong>Tools Products</strong></h1>
        <div className="tools__row">
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
        <div className="tools__row">
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
        <div className="tools__row">
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

export default Tools;
export { toolsProducts };
