import { create } from "zustand";
import { GetCoffeeListRequestParams } from "../types/coffeeTypes";
import { devtools, persist } from "zustand/middleware";
import { CartActions, CartState, ListActions, ListState } from "./storetypes";
import { listSlice } from "./listSlice";
import { cartSlice } from "./cartSlice";



export const useCoffeeStore = create<CartActions & CartState & ListActions & ListState>()(devtools(persist((...arg) => ({ ...listSlice(...arg), ...cartSlice(...arg) }), { name: 'coffeeStore', partialize: (state) => ({ cart: state.cart, address: state.address }) }), { name: 'coffeeStore' }));

export const getCoffeeList = (params?: GetCoffeeListRequestParams) => useCoffeeStore.getState().getCoffeeList(params);