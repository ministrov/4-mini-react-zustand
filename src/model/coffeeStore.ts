import { create, StateCreator } from "zustand";
import axios from "axios";
import { CoffeeType, GetCoffeeListRequestParams, OrderItem } from "../types/coffeeTypes";
import { devtools } from "zustand/middleware";

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

const coffeeSlice: StateCreator<CoffeeState & CoffeeActions, [['zustand/devtools', never]]> = (set, get) => ({
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
    orderCoffee: () => { },
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

export const useCoffeeStore = create<CoffeeState & CoffeeActions>()(devtools(coffeeSlice));