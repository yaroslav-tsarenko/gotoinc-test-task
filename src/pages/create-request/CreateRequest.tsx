import React, {FC} from 'react';
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";
import RequestTypeForm from "../../components/request-type-form/RequestTypeForm";

const CreateRequest: FC = () => {
    return (
        <DashboardLayout title="Create Request">
            <div data-testid="request-type-form-page">
                <RequestTypeForm/>
            </div>
        </DashboardLayout>
    );
};

export default CreateRequest;