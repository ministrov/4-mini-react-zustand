import { create, StateCreator } from "zustand";
import axios from "axios";
import { CoffeeType, GetCoffeeListRequestParams, OrderCoffeeResponse, OrderItem } from "../types/coffeeTypes";
import { devtools, persist } from "zustand/middleware";

const BASE_URL = 'https://purpleschool.ru/coffee-api';

type CoffeeState = {
    coffeeList: CoffeeType[] | undefined;
    controller?: AbortController;
    cart?: OrderItem[];
    address?: string;
};

type CoffeeActions = {
    getCoffeeList: (params?: GetCoffeeListRequestParams) => void;
    addCoffeeToCart: (coffee: CoffeeType) => void;
    clearCart: () => void;
    orderCoffee: () => void;
    setAddress: (address: string) => void;
};

const coffeeSlice: StateCreator<CoffeeState & CoffeeActions, [['zustand/devtools', never], ['zustand/persist', unknown]]> = (set, get) => ({
    coffeeList: undefined,
    controller: undefined,
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
    getCoffeeList: async (params) => {
        const { controller } = get();

        if (controller) {
            controller.abort();
        }

        const newController = new AbortController();
        set({ controller: newController });

        const { signal } = newController;


        try {
            const { data } = await axios.get(BASE_URL, { params, signal } as any);
            set({ coffeeList: data as CoffeeType[] });
        } catch (error) {
            // if (axios.isCancel(error)) {
            //     return;
            // }
            console.error(error);
        }
        // try {
        //     const response = await fetch(BASE_URL);
        //     const data = await response.json();
        //     return data;
        // } catch (error) {
        //     console.error(error);
        // }
    },
});

console.log(coffeeSlice);

export const useCoffeeStore = create<CoffeeState & CoffeeActions>()(devtools(persist(coffeeSlice, { name: 'coffeeStore', partialize: (state) => ({ cart: state.cart, address: state.address }) }), { name: 'coffeeStore' }));