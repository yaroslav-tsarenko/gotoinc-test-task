import React from 'react';
import AllRequestsPreview from '../../components/all-requests-preview/AllRequestsPreview';

const AllRequestsDemo: React.FC = () => {
    return (
        <div data-testid="all-requests-demo-page">
            <AllRequestsPreview/>;
        </div>
    )
};

export default AllRequestsDemo;