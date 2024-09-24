import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import DashboardLayout from "../../components/dashboard-layout/DashboardLayout";

const Home: React.FC = () => {
    const currentUser = useAuthStore((state) => state.currentUser);

    return (
        <DashboardLayout title="Home">
            <h1 className="text-2xl font-bold text-cyan-900">Welcome to your account, {currentUser?.name}</h1>
            <p className="text-1xl  text-cyan-700">Use the sidebar to navigate through your options.</p>
        </DashboardLayout>
    );
};

export default Home;