import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import cartReducer from "./cartSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authSlice,
    },
});

// export default store