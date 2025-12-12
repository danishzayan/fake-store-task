import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (
        (email === 'psiborgtech@gmail.com' && password === 'test@123') ||
        (email === 'danishzayan6@gmail.com' && password === 'test@123')
      ) {
        state.isLoggedIn = true;
        state.user = { email };
        state.error = null;
      } else {
        state.isLoggedIn = false;
        state.user = null;
        state.error = 'Invalid credentials';
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
