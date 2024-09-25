import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import styles from './RegistrationForm.module.scss';

const RegistrationForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = useAuthStore((state) => state.register);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register(name, email, password);
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form} data-testid="registration-form">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={styles.input}
                data-testid="name-input"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
                data-testid="email-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
                data-testid="password-input"
            />
            <a href="/login" data-testid="login-link">I already have an account, want to login</a>
            <button type="submit" className={styles.btn} data-testid="register-button">Register</button>
        </form>
    );
};

export default RegistrationForm;