import React from 'react';
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";
import DeliveryForm from "../../components/delivery-form/DeliveryForm";

const CreateDelivery: React.FC = () => {
    return (
        <DashboardLayout title="Create Delivery">
            <DeliveryForm/>
        </DashboardLayout>
    );
};

export default CreateDelivery;