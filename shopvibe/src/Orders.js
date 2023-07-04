import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        const ordersRef = collection(db, `users/${user?.uid}/orders`);
        const q = query(ordersRef);
        const querySnapshot = await getDocs(q);
        const ordersData = [];
        querySnapshot.forEach((doc) => {
          ordersData.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        ordersData.sort((a, b) => b.data.created - a.data.created);
        
        setOrders(ordersData);
      } else {
        setOrders([]);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders.length > 0 ? (
          orders.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <p>No orders yet</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
