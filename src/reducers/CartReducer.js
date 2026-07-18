const CartReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TO_CART": {
      const existingItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }

    case "INCREASE_QTY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QTY":
      return state
        .map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE_FROM_CART":
      return state.filter(
        (item) => item.id !== action.payload
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export default CartReducer;