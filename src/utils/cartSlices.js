import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      if (state.items.length === 0) {
        state.items.push({ ...action.payload, quantity: 1 });
       
      } else {
        
          const itemExist = state.items.find(
            (item) => item.id === action.payload.id
          );
          if (itemExist)
            state.items = state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          else {
            state.items.push({ ...action.payload, quantity: 1 });
          }
         
      }
    },
    removeItems: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items[index].quantity--;
        if (state.items[index].quantity === 0) {
          state.items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    sumTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
  },
});

export const { addItem, removeItems, clearCart, sumTotalPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
