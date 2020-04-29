import React from 'react';
import {FriendListItem} from './FriendsListItem';
import styles from './friends.module.css';
import PropTypes from "prop-types";




export const FriendList=({friends})=> {
 return(  <ul className={styles.friendsList}>
        {friends.map(friend => (
            <FriendListItem
                key = {friend.id}
                {...friend}/>))}
    </ul>
)
}

FriendList.propTypes={
    friends:PropTypes.array}