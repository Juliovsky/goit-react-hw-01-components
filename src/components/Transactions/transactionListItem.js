import React from 'react';
import PropTypes from "prop-types";


export const TransactionListItem = ({type, amount, currency}) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>)
}

TransactionListItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}