import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  objectStore: {},
};

const objectSlice = createSlice({
  name: 'object',
  initialState,
  reducers: {
    addObjectToStore: (state, action) => {
      state.objectStore = { ...state.objectStore, ...action.payload };
    },
  },
});

const store = configureStore({
  reducer: {
    object: objectSlice.reducer,
  },
});

export const { addObjectToStore } = objectSlice.actions;
export default store;