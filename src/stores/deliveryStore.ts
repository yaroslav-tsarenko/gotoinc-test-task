import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Delivery {
    id: string;
    userId: string;
    fromCity: string;
    toCity: string;
    dispatchDate: string;
}

interface DeliveryStore {
    deliveries: Delivery[];
    addDelivery: (delivery: Delivery) => void;
    updateDelivery: (id: string, updatedData: Partial<Delivery>) => void;
    deleteDelivery: (id: string) => void;
}

export const useDeliveryStore = create<DeliveryStore>()(
    persist(
        (set) => ({
            deliveries: [],
            addDelivery: (delivery) => set((state) => ({ deliveries: [...state.deliveries, delivery] })),
            updateDelivery: (id, updatedData) => set((state) => ({
                deliveries: state.deliveries.map((delivery) => (delivery.id === id ? { ...delivery, ...updatedData } : delivery)),
            })),
            deleteDelivery: (id) => set((state) => ({
                deliveries: state.deliveries.filter((delivery) => delivery.id !== id),
            })),
        }),
        {
            name: 'delivery-storage',
        }
    )
);