import React from 'react';
import DashboardLayout from '../../components/dashboard-layout/DashboardLayout';
import AllRequestsPreview from '../../components/all-requests-preview/AllRequestsPreview';

const AllRequests: React.FC = () => {
    return (
        <DashboardLayout title="All Requests">
            <div data-testid="all-requests-page">
                <AllRequestsPreview />
            </div>
        </DashboardLayout>
    );
};

export default AllRequests;