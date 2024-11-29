import { StateCreator } from "zustand";
import axios from "axios";
import { CartActions, CartState, ListActions, ListState } from "./storetypes";
import { OrderCoffeeResponse, OrderItem } from "../types/coffeeTypes";
import { BASE_URL } from "../api/CoreApi";

export const cartSlice: StateCreator<
    CartActions & CartState & ListActions & ListState,
    [['zustand/devtools', never], ['zustand/persist', unknown]],
    [['zustand/devtools', never], ['zustand/persist', unknown]],
    CartActions & CartState
> = (set, get) => ({
    cart: undefined,
    address: undefined,
    addCoffeeToCart: (coffee) => {
        const { cart } = get();
        const { id, name, subTitle } = coffee;
        const preparedItem: OrderItem = {
            id,
            name: `${name} ${subTitle}`,
            size: 'L',
            quantity: 1,
        };
        set({ cart: cart ? [...cart, preparedItem] : [preparedItem] });
    },
    clearCart: () => {
        set({ cart: undefined });
    },
    orderCoffee: async () => {
        const { cart, address, clearCart } = get();
        try {
            const { data } = await axios.post<OrderCoffeeResponse>(`${BASE_URL}/order`, {
                address,
                order_items: cart
            });
            if (data.success) {
                alert(data.message);
                clearCart();
            }
        } catch (error) {
            console.error(error);
        }
    },
    setAddress: (address) => {
        set({ address });
    },
});