import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useOrderStore } from '../../stores/orderStore';
import styles from './OrderForm.module.scss';
import { generateId } from '../../utils/generateId';

const OrderForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const addOrder = useOrderStore((state) => state.addOrder);

    const [formData, setFormData] = useState({
        fromCity: '',
        toCity: '',
        parcelType: '',
        dispatchDate: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            const newOrder = { id: generateId(), ...formData, userId: id };
            addOrder(newOrder);
            window.alert('Order created successfully');
            setTimeout(() => {
                navigate(`/${id}/requests`);
            }, 1000);
        } else {
            console.error('User ID is undefined');
            window.alert('Error creating order');
        }
    };

    return (
        <form className={styles.orderForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
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
            <div className={styles.inputGroup}>
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
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="parcelType">Type of Parcel</label>
                <select
                    className={styles.select}
                    id="parcelType"
                    name="parcelType"
                    value={formData.parcelType}
                    onChange={handleChange}
                >
                    <option value="gadgets">Gadgets</option>
                    <option value="drinks">Drinks</option>
                    <option value="clothes">Clothes</option>
                    <option value="medicines">Medicines</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className={styles.inputGroup}>
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
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="description">Parcel Description</label>
                <textarea
                    className={styles.textarea}
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.buttonNav}>
                {id && <Link to={`/${id}/create`} className={styles.button}>Go Back</Link>}
                <button className={styles.button} type="submit">Submit</button>
            </div>
        </form>
    );
};

export default OrderForm;