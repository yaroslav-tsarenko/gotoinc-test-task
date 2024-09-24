import React from 'react';
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";
import UserRequestPreview from "../../components/user-requests-preview/UserRequestsPreview";

const UserRequest: React.FC = () => {
    return (
        <DashboardLayout title="Your Requests">
            <UserRequestPreview />
        </DashboardLayout>
    );
};

export default UserRequest;