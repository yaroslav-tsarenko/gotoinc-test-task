import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDeliveryStore } from '../../stores/deliveryStore';
import styles from './DeliveryForm.module.scss';
import { generateId } from '../../utils/generateId';

const DeliveryForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const addDelivery = useDeliveryStore((state) => state.addDelivery);

    const [formData, setFormData] = useState({
        fromCity: '',
        toCity: '',
        dispatchDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            const newDelivery = { id: generateId(), ...formData, userId: id };
            addDelivery(newDelivery);
            window.alert('Delivery created successfully');
            setTimeout(() => {
                navigate(`/${id}/requests`);
            }, 1000);
        } else {
            console.error('User ID is undefined');
            window.alert('Error creating delivery');
        }
    };

    return (
        <form className={styles.deliveryForm} onSubmit={handleSubmit} data-testid="delivery-form">
            <div className={styles.inputGroup} data-testid="input-group-from-city">
                <label className={styles.label} htmlFor="fromCity">From City</label>
                <input
                    className={styles.input}
                    type="text"
                    id="fromCity"
                    name="fromCity"
                    value={formData.fromCity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.inputGroup} data-testid="input-group-to-city">
                <label className={styles.label} htmlFor="toCity">To City</label>
                <input
                    className={styles.input}
                    type="text"
                    id="toCity"
                    name="toCity"
                    value={formData.toCity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.inputGroup} data-testid="input-group-dispatch-date">
                <label className={styles.label} htmlFor="dispatchDate">Dispatch Date</label>
                <input
                    className={styles.input}
                    type="date"
                    id="dispatchDate"
                    name="dispatchDate"
                    value={formData.dispatchDate}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.buttonNav} data-testid="button-nav">
                {id && <Link to={`/${id}/create`} className={styles.button}>Go Back</Link>}
                <button className={styles.button} type="submit">Submit</button>
            </div>
        </form>
    );
};

export default DeliveryForm;