import { createContext, useReducer } from "react";

const stateInit = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { item } = action.payload;
      if (!state.some((sitem) => sitem.id === item.webID)) {
        return [
          ...state,
          { id: item.webID, qty: 1, price: item.price.regularPrice.minPrice },
        ];
      } else {
        return state.map((sitem) => {
          if (sitem.id === item.webID) {
            return { ...sitem, qty: sitem.qty + 1 };
          } else {
            return sitem;
          }
        });
      }
    }
    case "SUB_FROM_CART": {
      const { item } = action.payload;
      if (
        !state.some((sitem) => sitem.id === item.webID) ||
        state.find((sitem) => sitem.id === item.webID).qty === 0
      ) {
        return state;
      } else {
        return state.map((sitem) => {
          if (sitem.id === item.webID) {
            return { ...sitem, qty: sitem.qty - 1 };
          } else {
            return sitem;
          }
        });
      }
    }
    default:
      return state;
  }
};

export const cartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, stateInit);

  return (
    <cartContext.Provider value={[cart, dispatch]}>
      {children}
    </cartContext.Provider>
  );
};
