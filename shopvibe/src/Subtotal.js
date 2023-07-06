import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();

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
              renderText={(value) => <strong>{value}</strong>}
              decimalScale={2}
              value={getBasketTotal(basket).toFixed(2)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"€ "}
            />
          </div>
        </div>

        <button onClick={() => history.push("/payment")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
