import React from 'react';
import {Profile} from "./Profile/profile";
import user from "./Profile/user.json";
import {Statistics} from './Statistics/statistics';
import statisticalData from './Statistics/statistical-data.json';
import {FriendList} from './Friends/friends'
import friends from './Friends/friends.json';
import {TransactionHistory} from './Transactions/transactions';
import transactions from './Transactions/transactions.json'


export const App = () => (
    <>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData}/>
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions}/>
    </>

);

export default App;

