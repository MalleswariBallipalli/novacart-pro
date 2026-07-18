import { createContext, useReducer, useEffect } from "react";

export const WishlistContext = createContext();

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

// ==============================
// Reducer
// ==============================

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const exists = state.wishlist.some(
        (item) => item.id === action.payload.id
      );

      if (exists) return state;

      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: [],
      };

    default:
      return state;
  }
}

// ==============================
// Provider
// ==============================

function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(state.wishlist)
    );
  }, [state.wishlist]);

  // Actions

  const addToWishlist = (product) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
  };

  const removeFromWishlist = (id) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: id,
    });
  };

  const clearWishlist = () => {
    dispatch({
      type: "CLEAR_WISHLIST",
    });
  };

  // Helper

  const isInWishlist = (id) => {
    return state.wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: state.wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;