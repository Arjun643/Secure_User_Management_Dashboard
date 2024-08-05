import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Adjust the import based on your file structure

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
