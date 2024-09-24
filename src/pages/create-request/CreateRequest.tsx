import React, {FC} from 'react';
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";
import RequestTypeForm from "../../components/request-type-form/RequestTypeForm";

const CreateRequest: FC = () => {
    return (
        <DashboardLayout title="Create Request">
            <RequestTypeForm/>
        </DashboardLayout>
    );
};

export default CreateRequest;