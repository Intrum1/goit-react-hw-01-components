
import PropTypes from 'prop-types';
import FriendListItem  from 'components/FrendListItem/FriendListItem';


const FriendList = ({ friends }) => {
    return (
<ul className={CSS.friendlist}>
  {friends.map((friend) => (
  <FriendListItem key={friend.id} {... friend} />
  ))}
</ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
    })
  )
}

export default FriendList