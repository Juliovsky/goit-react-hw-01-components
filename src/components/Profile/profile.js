import React from 'react';
import styles from './profile.module.css';
import PropTypes from 'prop-types';


export const Profile = ({avatar, name, tag, location, stats}) => {
    console.log(stats);
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="user avatar"
                    className={styles.userAvatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers </span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views </span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li className={styles.list_item}>
                    <span className={styles.label}>Likes </span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
};





