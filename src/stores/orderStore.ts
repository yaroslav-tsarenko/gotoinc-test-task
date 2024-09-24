import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Order {
    fromCity: string;
    toCity: string;
    parcelType: string;
    dispatchDate: string;
    description: string;
    userId: string;
}

interface OrderStore {
    orders: Order[];
    addOrder: (order: Order) => void;
}

export const useOrderStore = create<OrderStore>()(
    persist(
        (set) => ({
            orders: [],
            addOrder: (order: Order) => set((state) => ({
                orders: [...state.orders, order],
            })),
        }),
        {
            name: 'order-storage',
        }
    )
);