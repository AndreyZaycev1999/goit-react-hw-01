import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.friend} key={id}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            {isOnline ? (
              <p className={css.online}>Online</p>
            ) : (
              <p className={css.offline}>Offline</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
