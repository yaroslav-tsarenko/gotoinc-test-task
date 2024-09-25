import React from 'react';
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";
import OrderForm from "../../components/order-form/OrderForm";

const CreateOrder: React.FC = () => {
    return (
        <DashboardLayout title="Create Order">
            <div data-testid="create-order-page">
                <OrderForm/>
            </div>
        </DashboardLayout>
    );
};

export default CreateOrder;