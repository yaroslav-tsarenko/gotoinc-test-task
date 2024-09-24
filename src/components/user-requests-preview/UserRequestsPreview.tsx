import React from 'react';
import { useParams } from 'react-router-dom';
import { useDeliveryStore } from '../../stores/deliveryStore';
import { useOrderStore } from '../../stores/orderStore';
import { useAuthStore } from '../../stores/authStore';
import UserRequestItem from '../user-request-item/UserRequestItem';
import styles from './UserRequestsPreview.module.scss';

const UserRequestPreview: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const deliveries = useDeliveryStore((state) => state.deliveries);
    const orders = useOrderStore((state) => state.orders);
    const users = useAuthStore((state) => state.users);
    const updateOrder = useOrderStore((state) => state.updateOrder);
    const deleteOrder = useOrderStore((state) => state.deleteOrder);
    const updateDelivery = useDeliveryStore((state) => state.updateDelivery);
    const deleteDelivery = useDeliveryStore((state) => state.deleteDelivery);

    const userDeliveries = deliveries.filter((delivery) => delivery.userId === id);
    const userOrders = orders.filter((order) => order.userId === id);
    const currentUser = users.find((user) => user.id === id);

    const handleEditOrder = (orderId: string, updatedData: any) => {
        updateOrder(orderId, updatedData);
    };

    const handleDeleteOrder = (orderId: string) => {
        deleteOrder(orderId);
    };

    const handleEditDelivery = (deliveryId: string, updatedData: any) => {
        updateDelivery(deliveryId, updatedData);
    };

    const handleDeleteDelivery = (deliveryId: string) => {
        deleteDelivery(deliveryId);
    };

    return (
        <div className={styles.requestPreview}>
            <h2>{currentUser?.name}'s Requests</h2>
            <div className={styles.requests}>
                {userDeliveries.length === 0 && userOrders.length === 0 ? (
                    <p>Currently, you didn't create any request.</p>
                ) : (
                    <>
                        {userDeliveries.map((delivery) => (
                            <UserRequestItem
                                key={delivery.id}
                                type="Delivery"
                                fromCity={delivery.fromCity}
                                toCity={delivery.toCity}
                                dispatchDate={delivery.dispatchDate}
                                allowEditing={true}
                                onEdit={(updatedData) => handleEditDelivery(delivery.id, updatedData)}
                                onDelete={() => handleDeleteDelivery(delivery.id)}
                            />
                        ))}
                        {userOrders.map((order) => (
                            <UserRequestItem
                                key={order.id}
                                type="Order"
                                fromCity={order.fromCity}
                                toCity={order.toCity}
                                dispatchDate={order.dispatchDate}
                                parcelType={order.parcelType}
                                description={order.description}
                                allowEditing={true}
                                onEdit={(updatedData) => handleEditOrder(order.id, updatedData)}
                                onDelete={() => handleDeleteOrder(order.id)}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default UserRequestPreview;