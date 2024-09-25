import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './RequestTypeForm.module.scss';

const RequestTypeForm: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    return (
        <div className={styles.requestTypeForm} data-testid="request-type-form">
            <h1 className={styles.title} data-testid="title">Choose Type of Request</h1>
            <div className={styles.buttonGroup} data-testid="button-group">
                <button
                    className={styles.button}
                    onClick={() => navigate(`/${id}/create/deliver`)}
                >
                    Delivery
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigate(`/${id}/create/order`)}
                >
                    Order
                </button>
            </div>
        </div>
    );
};

export default RequestTypeForm;