import { createSlice } from '@reduxjs/toolkit';
const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    editItem: (state, action) => {
      const { index, value } = action.payload;
      state.items[index] = value;
    },
    deleteAllItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, editItem, deleteAllItems } = todoSlice.actions;
export default todoSlice.reducer;
