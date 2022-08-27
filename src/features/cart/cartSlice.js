import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
});

const initialState = {
  CartItems: [],
  amount: 1,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.CartItems = [];
    },
    removeItem: (state, actions) => {
      const itemID = actions.payload;
      state.CartItems = state.CartItems.filter((item) => item.id !== itemID);
    },
    // increaseAmount: (state, actions) => {
    //   const itemId = actions.payload;
    //   const findingItem = state.CartItems.find((item) => item.id === itemId);
    //   findingItem.amount = findingItem.amount + 1;
    // },
    // decreaseAmount: (state, actions) => {
    //   const itemid = actions.payload;
    //   const foundItem = state.CartItems.find((item) => item.id === itemid);
    //   foundItem.amount = foundItem.amount - 1;
    // },
    toogleAmount: (state, actions) => {
      const ITEMID = actions.payload.ID;
      const findSpecificItem = state.CartItems.find(
        (item) => item.id === ITEMID
      );
      if (actions.payload.type === "increase") {
        findSpecificItem.amount = findSpecificItem.amount + 1;
      }
      if (actions.payload.type === "decrease") {
        findSpecificItem.amount = findSpecificItem.amount - 1;
      }
    },
    calculatesTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.CartItems.map((item) => {
        amount += item.amount;
        total += item.amount * item.price;
        return;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.CartItems = actions.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  clearCart,
  removeItem,
  // increaseAmount,
  // decreaseAmount,
  toogleAmount,
  calculatesTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
