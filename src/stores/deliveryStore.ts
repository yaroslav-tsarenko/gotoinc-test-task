import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Delivery {
    fromCity: string;
    toCity: string;
    dispatchDate: string;
    userId: string;
}

interface DeliveryStore {
    deliveries: Delivery[];
    addDelivery: (delivery: Delivery) => void;
}

export const useDeliveryStore = create<DeliveryStore>()(
    persist(
        (set) => ({
            deliveries: [],
            addDelivery: (delivery: Delivery) => set((state) => ({
                deliveries: [...state.deliveries, delivery],
            })),
        }),
        {
            name: 'delivery-storage',
        }
    )
);