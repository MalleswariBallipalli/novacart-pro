import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

// ==============================
// Reducer
// ==============================

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}

// ==============================
// Provider
// ==============================

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(state.cartItems)
    );
  }, [state.cartItems]);

  // Actions

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (id) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });

  const increaseQuantity = (id) =>
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });

  const decreaseQuantity = (id) =>
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });

  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

  // Derived Values

  const totalItems = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;