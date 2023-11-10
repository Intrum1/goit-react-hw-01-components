import Profile from "./Profile/Profile";
import user from '../data/user.json'
import { Statistics } from "./Statistics/Statistics";
import stats from '../data/statistic.json';
import FriendList from "./FriendList/FriendList";
import friendsData from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactionHistory.json';
import './App.css'


export const App = () => {
  return (
    <div className="container">
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      
      <FriendList friends={friendsData} />;
      <TransactionHistory items={transactions} />;
      </div>
  );
};


