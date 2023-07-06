import React, { createContext, useContext, useReducer, useEffect } from "react";

// Initial state
const initialState = {
  basket: [],
  user: null,
};

// Create context
export const StateContext = createContext();

// Wrap the app and provide the data layer
export const StateProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      dispatch({
        type: "SET_BASKET",
        basket: JSON.parse(storedBasket),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
