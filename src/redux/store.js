import { reducer } from "@/components/ui/use-toast";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
