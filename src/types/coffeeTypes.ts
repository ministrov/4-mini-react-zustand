export enum CoffeeCategory {
    cappuccino = 'cappuccino',
    latte = 'latte',
    macchiato = 'macchiato',
    americano = 'americano'
}

export type CoffeeType = {
    id: number;
    name: string;
    subTitle: string;
    type: string;
    price: number;
    image: string;
    rating: number;
};

export type GetCoffeeListRequestParams = {
    text?: string;
    type?: CoffeeCategory
};

export type OrderItem = {
    id: number;
    name: string;
    size: 'L' | 'M' | 'S';
    quantity: number;
};

export type OrderCoffeeRequest = {
    address: string;
    order_items: OrderItem[];
};

export type OrderCoffeeResponse = {
    message: string;
    success: boolean;
}