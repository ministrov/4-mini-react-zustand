import { create, StateCreator } from "zustand";
import axios from "axios";
import { CoffeeType } from "../types/coffeeTypes";
import { devtools } from "zustand/middleware";

const BASE_URL = 'https://purpleschool.ru/coffee-api';

type CoffeeState = {
    coffeeList: CoffeeType[] | undefined;
};

type CoffeeActions = {
    getCoffeeList: () => void;
};

const coffeeSlice: StateCreator<CoffeeState & CoffeeActions, [['zustand/devtools', never]]> = (set) => ({
    coffeeList: undefined,
    getCoffeeList: async () => {
        try {
            const { data } = await axios.get(BASE_URL);
            set({ coffeeList: data as CoffeeType[] });
        } catch (error) {
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