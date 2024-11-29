import { StateCreator } from "zustand"
import axios from "axios";
import { CartActions, CartState, ListActions, ListState } from "./storetypes";
import { BASE_URL } from "../api/CoreApi";
import { CoffeeType } from "../types/coffeeTypes";

export const listSlice: StateCreator<
    CartActions & CartState & ListActions & ListState,
    [['zustand/devtools', never], ['zustand/persist', unknown]],
    [['zustand/devtools', never], ['zustand/persist', unknown]],
    ListActions & ListState
> = (set, get) => ({
    coffeeList: undefined,
    controller: undefined,
    params: {
        text: undefined
    },
    setParams: (newParams) => {
        const { getCoffeeList, params } = get();
        set({ params: { ...params, ...newParams } }, false, "setParams");
        getCoffeeList(params);
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