import { CoffeeType, OrderItem, GetCoffeeListRequestParams } from "../types/coffeeTypes";

export type ListState = {
    coffeeList: CoffeeType[] | undefined;
    controller?: AbortController;
    params: GetCoffeeListRequestParams;
};

export type ListActions = {
    getCoffeeList: (params?: GetCoffeeListRequestParams) => void;
    setParams: (params?: GetCoffeeListRequestParams) => void;
};

export type CartState = {
    cart?: OrderItem[];
    address?: string;
}

export type CartActions = {
    addCoffeeToCart: (coffee: CoffeeType) => void;
    clearCart: () => void;
    orderCoffee: () => void;
    setAddress: (address: string) => void;
}