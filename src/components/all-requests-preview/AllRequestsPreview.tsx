import React, { useState } from 'react';
import { useAllRequestStore } from '../../stores/allRequestsStore';
import UserRequestItem from '../user-request-item/UserRequestItem';
import styles from './AllRequestsPreview.module.scss';

const AllRequestsPreview: React.FC = () => {
    const allDeliveries = useAllRequestStore((state) => state.deliveries);
    const allOrders = useAllRequestStore((state) => state.orders);
    const [sortCriteria, setSortCriteria] = useState<'creationDate' | 'dispatchDate'>('creationDate');

    const allRequests = [...allDeliveries, ...allOrders];

    const sortedRequests = allRequests.sort((a, b) => {
        if (sortCriteria === 'dispatchDate') {
            return new Date(a.dispatchDate).getTime() - new Date(b.dispatchDate).getTime();
        }
        return new Date(a.id).getTime() - new Date(b.id).getTime();
    });

    return (
        <div className={styles.allRequestsPreview} data-testid="all-requests">
            <h2 data-testid="title">All Requests</h2>
            <div className={styles.sortOptions} data-testid="sort-options">
                <label>
                    Sort by:
                    <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value as 'creationDate' | 'dispatchDate')}>
                        <option value="creationDate">Creation Date</option>
                        <option value="dispatchDate">Dispatch Date</option>
                    </select>
                </label>
            </div>
            {sortedRequests.length === 0 ? (
                <p>No one created any request... :(</p>
            ) : (
                sortedRequests.map((request) => (
                    <UserRequestItem
                        key={request.id}
                        type={'parcelType' in request ? 'Order' : 'Delivery'}
                        fromCity={request.fromCity}
                        toCity={request.toCity}
                        dispatchDate={request.dispatchDate}
                        allowEditing={false}
                    />
                ))
            )}
        </div>
    );
};

export default AllRequestsPreview;