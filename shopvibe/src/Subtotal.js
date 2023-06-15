import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="summary">
        <p>Summary</p>
      </div>
      <div className="subtotal">
        <div className="subtotal__row">
          <div className="subtotal__text">
            <p>TOTAL ({basket.length} items):</p>
          </div>
          <div className="subtotal__value">
            <CurrencyFormat
              renderText={(value) => (
                <strong>{value}</strong>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"€"}
            />
          </div>
        </div>

        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
