import React from 'react';
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";
import OrderForm from "../../components/order-form/OrderForm";

const CreateOrder: React.FC = () => {
    return (
        <DashboardLayout title="Create Order">
            <OrderForm/>
        </DashboardLayout>
    );
};

export default CreateOrder;