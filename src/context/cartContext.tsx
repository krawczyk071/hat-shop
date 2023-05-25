import { createContext, useReducer } from "react";
import React, { ReactNode } from "react";
import { Product } from "../utils/interfaceDetails";

//AppState
type Qty = {
  qty: number;
};
type All = Product & Qty;
// interface ContextItem extends Product {
//   qty:number
// }
type ContextType = All[] | null;

//AppActions
type Add = { type: "ADD_TO_CART"; payload: { item: Product; qty: number } };
type Sub = { type: "SUB_FROM_CART"; payload: { item: Product } };
type Reset = { type: "CLEAR" };
type ActionsType = Add | Sub | Reset;

// export type ReducerStateType = {
//   webID?: string;
//   qty?: number;
//   [key: string]: any;
// }[];
// export type ReducerActionType = {
//   type: string;
//   payload: { [key: string]: any };
// };

// const stateInit: ReducerStateType = [];

const reducer = (state: ContextType, action: ActionsType) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { item, qty } = action.payload;
      if (!state) {
        return [
          {
            ...item,
            qty: qty,
          },
        ];
      }
      if (!state.some((sitem) => sitem.webID === item.webID)) {
        return [
          ...state,
          {
            ...item,
            qty: qty,
            // webID: item.webID,
            // price: item.price.regularPrice.minPrice,
            // productTitle: item.productTitle,
          },
        ];
      } else {
        return state.map((sitem) => {
          if (sitem.webID === item.webID) {
            return { ...sitem, qty: sitem.qty + qty };
          } else {
            return sitem;
          }
        });
      }
    }
    case "SUB_FROM_CART": {
      const { item } = action.payload;
      //not in cart or qty 0
      if (
        !state ||
        !state.some((sitem) => sitem.webID === item.webID) ||
        state.find((sitem) => sitem.webID === item.webID)?.qty === 0
      ) {
        //dont do anything
        return state;
      } else {
        return state.map((sitem) => {
          if (sitem.webID === item.webID && sitem.qty) {
            return { ...sitem, qty: sitem.qty - 1 };
          } else {
            return sitem;
          }
        });
      }
    }
    case "CLEAR": {
      return null;
    }
    default:
      return state;
  }
};

export const cartContext = createContext<ContextType | null>(null); //ReactContext<unknown>
type Props = {
  children: ReactNode;
};

export const DispatchContext = createContext<any>(null);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, dispatch] = useReducer<React.Reducer<ContextType, ActionsType>>(
    reducer,
    null
  );

  return (
    <cartContext.Provider value={cart}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </cartContext.Provider>
  );
};
