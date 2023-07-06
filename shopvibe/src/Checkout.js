import React, { useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const storedBasket = sessionStorage.getItem("basket");
    if (storedBasket) {
      dispatch({
        type: "SET_BASKET",
        basket: JSON.parse(storedBasket),
      });
    }
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="/cart_img/oculus.jpg" alt="" />
        <div>
          <h3 className="hello__user">
            Hello, {user ? user.displayName || user.email : "Guest"}
          </h3>
          <h2 className="checkout__title">Your Shopping Cart Details</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
