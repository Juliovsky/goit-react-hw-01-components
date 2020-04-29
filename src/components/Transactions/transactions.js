import React from 'react';
import {TransactionListItem} from "./transactionListItem";
import styles from './transactions.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
    return (
        <table className={styles.transaction_history}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <TransactionListItem
                    key={item.id}
                    {...item}/>
            ))}
            </tbody>
        </table>)
}
TransactionHistory.propTypes = {
    items: PropTypes.array,
}