import React from 'react';
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";
import UserRequestPreview from "../../components/user-requests-preview/UserRequestsPreview";

const UserRequest: React.FC = () => {
    return (
        <DashboardLayout title="Your Requests">
            <div data-testid="users-requests-page">
                <UserRequestPreview />
            </div>
        </DashboardLayout>
    );
};

export default UserRequest;