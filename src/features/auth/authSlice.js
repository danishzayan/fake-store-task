import { createSlice } from '@reduxjs/toolkit';

// Attempt to load user data from localStorage
const storedUser = localStorage.getItem('user');

const initialState = {
  isLoggedIn: !!storedUser,
  user: storedUser ? JSON.parse(storedUser) : null,
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
        const userPayload = { email };
        state.user = userPayload;
        state.error = null;
        localStorage.setItem('user', JSON.stringify(userPayload));
      } else {
        state.isLoggedIn = false;
        state.user = null;
        state.error = 'Invalid credentials';
        localStorage.removeItem('user');
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
