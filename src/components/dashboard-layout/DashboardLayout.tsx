import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import {Link, useNavigate} from 'react-router-dom';
import styles from './DashboardLayout.module.scss';
import { FaBox, FaClipboardList, FaListAlt, FaSignOutAlt } from 'react-icons/fa';

interface DashboardLayoutProps {
    children?: React.ReactNode;
    title?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
    const currentUser = useAuthStore((state) => state.currentUser);

    return (
        <div className={styles.dashboard} data-testid="dashboard">
            <aside className={styles.sidebar} data-testid="sidebar">
                <h2 data-testid="title">{title}</h2>
                <Link className={styles.button} to={`/${currentUser?.id}/create`} >
                    <FaBox /> Create Request
                </Link>
                <Link className={styles.button} to={`/${currentUser?.id}/requests`}>
                    <FaClipboardList /> My Requests
                </Link>
                <Link className={styles.button} to={`/${currentUser?.id}/all-requests`}>
                    <FaListAlt /> All Requests
                </Link>
                <Link className={styles.button} to="/login" data-testid="logout-button">
                    <FaSignOutAlt /> Logout
                </Link>
            </aside>
            <main className={styles.main} data-testid="main">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;