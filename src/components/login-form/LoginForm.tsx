import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useAuthStore((state) => state.login);
    const currentUser = useAuthStore((state) => state.currentUser);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
        if (currentUser) {
            navigate(`/${currentUser.id}/Home`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
            />
            <a href="/">I don't have account, need to create it</a>
            <button type="submit" className={styles.btn}>Login</button>
        </form>
    );
};

export default LoginForm;