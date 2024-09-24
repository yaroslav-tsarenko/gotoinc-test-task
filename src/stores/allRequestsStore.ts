import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Delivery {
    id: string;
    userId: string;
    fromCity: string;
    toCity: string;
    dispatchDate: string;
}

interface Order {
    id: string;
    userId: string;
    fromCity: string;
    toCity: string;
    dispatchDate: string;
    parcelType?: string;
    description?: string;
}

interface AllRequestStore {
    deliveries: Delivery[];
    orders: Order[];
    addDelivery: (delivery: Delivery) => void;
    addOrder: (order: Order) => void;
}

export const useAllRequestStore = create<AllRequestStore>()(
    persist(
        (set) => ({
            deliveries: [],
            orders: [],
            addDelivery: (delivery) => set((state) => ({ deliveries: [...state.deliveries, delivery] })),
            addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
        }),
        {
            name: 'all-request-storage',
        }
    )
);