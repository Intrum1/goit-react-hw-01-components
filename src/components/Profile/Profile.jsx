import CSS from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={CSS.profile}>
            <div className={CSS.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={CSS.avatar}
                />
                <p className={CSS.name}>{username}</p>
                <p className={CSS.tag}>@{tag}</p>
                <p className={CSS.location}>{location}</p>
            </div>

            <ul className={CSS.stats}>
                <li>
                    <span className={CSS.label}>Followers</span>
                    <span className={CSS.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={CSS.label}>Views</span>
                    <span className={CSS.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={CSS.label}>Likes</span>
                    <span className={CSS.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;