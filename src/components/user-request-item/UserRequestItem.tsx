import React, { useState } from 'react';
import styles from './UserRequestItem.module.scss';
import { FaEdit, FaTrash, FaInfo } from 'react-icons/fa';
import { useAllRequestStore } from '../../stores/allRequestsStore';
import { useAuthStore } from '../../stores/authStore';

interface UserRequestItemProps {
    type: 'Order' | 'Delivery';
    fromCity: string;
    toCity: string;
    dispatchDate: string;
    parcelType?: string;
    description?: string;
    allowEditing?: boolean;
    onDelete?: () => void;
    onEdit?: (updatedData: any) => void;
}

const UserRequestItem: React.FC<UserRequestItemProps> = ({ type, fromCity, toCity, dispatchDate, parcelType, description, allowEditing = false, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ fromCity, toCity, dispatchDate, parcelType, description });

    const allDeliveries = useAllRequestStore((state) => state.deliveries);
    const allOrders = useAllRequestStore((state) => state.orders);
    const users = useAuthStore((state) => state.users);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onEdit) {
            onEdit(formData);
        }
        setIsEditing(false);
    };

    const findMatchingRequests = () => {
        const allRequests = [...allDeliveries, ...allOrders];
        return allRequests
            .filter(request =>
                request.fromCity === fromCity &&
                request.toCity === toCity &&
                new Date(request.dispatchDate).toDateString() === new Date(dispatchDate).toDateString()
            )
            .map(request => ({
                ...request,
                userName: users.find(user => user.id === request.userId)?.name || 'Unknown'
            }));
    };

    const matchingRequests = findMatchingRequests();

    return (
        <div className={styles.requestItem}>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>From:</strong> {fromCity}</p>
            <p><strong>To:</strong> {toCity}</p>
            <p><strong>Date:</strong> {dispatchDate}</p>
            {parcelType && <p><strong>Parcel Type:</strong> {parcelType}</p>}
            {description && <p><strong>Description:</strong> {description}</p>}
            {allowEditing && (
                <div className={styles.actions}>
                    <FaEdit onClick={() => setIsEditing(true)} />
                    <FaTrash onClick={onDelete} />
                    <FaInfo onClick={() => setIsModalOpen(true)}/>
                </div>
            )}
            {isEditing && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <form onSubmit={handleSubmit}>
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
                            {type === 'Order' && (
                                <>
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
                                        <label className={styles.label} htmlFor="description">Parcel Description</label>
                                        <textarea
                                            className={styles.textarea}
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </>
                            )}
                            <button className={styles.button} type="submit">Submit</button>
                            <button className={styles.button} type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Matching Requests</h2>
                        {matchingRequests.length > 0 ? (
                            matchingRequests.map((request, index) => (
                                <div key={index} className={styles.requestItem}>
                                    <p><strong>From:</strong> {request.fromCity}</p>
                                    <p><strong>To:</strong> {request.toCity}</p>
                                    <p><strong>Date:</strong> {request.dispatchDate}</p>
                                    <p><strong>User:</strong> {request.userName}</p>
                                </div>
                            ))
                        ) : (
                            <p className={styles.matchMessage}>No matching requests found.</p>
                        )}
                        <button className={styles.button} onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserRequestItem;