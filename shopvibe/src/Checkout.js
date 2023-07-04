import React, { useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

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
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="/cart_img/oculus.jpg" alt="" />
        <div>
          <h3 className="hello__user">Hello, {user ? user.displayName || user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your shoping Cart Details</h2>
          {basket.map((item) => (
            <CheckoutProduct
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
