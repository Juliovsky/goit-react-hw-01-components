import React from 'react';
import styles from './friends.module.css'
import PropTypes from "prop-types";


export const FriendListItem = ({avatar, name, isOnline}) => {
    return (<li className={styles.friendsItem}>
            <span className={isOnline ? styles.isActive : styles.status}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="55"/>
            <p>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}