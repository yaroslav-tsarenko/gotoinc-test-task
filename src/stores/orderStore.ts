import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useAllRequestStore } from './allRequestsStore';

interface Order {
    id: string;
    userId: string;
    fromCity: string;
    toCity: string;
    dispatchDate: string;
    parcelType?: string;
    description?: string;
}

interface OrderStore {
    orders: Order[];
    addOrder: (order: Order) => void;
    updateOrder: (id: string, updatedData: Partial<Order>) => void;
    deleteOrder: (id: string) => void;
}

export const useOrderStore = create<OrderStore>()(
    persist(
        (set) => ({
            orders: [],
            addOrder: (order) => {
                set((state) => ({ orders: [...state.orders, order] }));
                useAllRequestStore.getState().addOrder(order);
            },
            updateOrder: (id, updatedData) => set((state) => ({
                orders: state.orders.map((order) => (order.id === id ? { ...order, ...updatedData } : order)),
            })),
            deleteOrder: (id) => set((state) => ({
                orders: state.orders.filter((order) => order.id !== id),
            })),
        }),
        {
            name: 'order-storage', // unique name for the storage
        }
    )
);