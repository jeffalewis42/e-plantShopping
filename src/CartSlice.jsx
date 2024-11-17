import { createSlice } from '@reduxjs/toolkit';



export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        console.log("In carslice.jsx");
        const { name, image, cost } = action.payload;
        console.log(name);
        console.log(image);
        console.log(cost);
        const existingItem = state.items.find(item => item.name === name);
        
        if (existingItem) {
          existingItem.quantity++;
          console.log("new quantity existing item: " + existingItem.quantity);


        } else {
          state.items.push({ name, image, cost, quantity: 1 });
          console.log("new item added");
          console.log(" ");
          

        }
        console.log("CURRENT CART");
        state.items.map (item => {
            console.log("Name: " + item.name);
            console.log("quantity: " + item.quantity);
            console.log("");
          });

      },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        console.log("Remove item");
        console.log(" ");
        console.log("CURRENT CART");
        state.items.map (item => {
            console.log("Name: " + item.name);
            console.log("quantity: " + item.quantity);
            console.log("");
          });

    },
    updateQuantity: (state, action) => {
        console.log(action.payload);
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
        
        console.log("CURRENT CART");
        state.items.map (item => {
            console.log("Name: " + item.name);
            console.log("quantity: " + item.quantity);
            console.log("");
          });

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions

export default CartSlice.reducer
