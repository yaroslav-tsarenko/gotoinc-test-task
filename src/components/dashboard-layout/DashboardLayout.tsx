import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardLayout.module.scss';
import { FaBox, FaTruck, FaClipboardList, FaListAlt, FaSignOutAlt } from 'react-icons/fa';

interface DashboardLayoutProps {
    children?: React.ReactNode;
    title: string;
}


const DashboardLayout: React.FC<DashboardLayoutProps> = ({children, title}) => {
    const currentUser = useAuthStore((state) => state.currentUser);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className={styles.dashboard}>
            <aside className={styles.sidebar}>
                <h2>{title}</h2>
                <button onClick={() => navigate(`/${currentUser?.id}/create`)}>
                    <FaBox /> Create Request
                </button>
                <button onClick={() => navigate(`/${currentUser?.id}/requests`)}>
                    <FaClipboardList /> User Requests
                </button>
                <button onClick={() => navigate(`/${currentUser?.id}/all-requests`)}>
                    <FaListAlt /> All Requests
                </button>
                <button onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                </button>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;