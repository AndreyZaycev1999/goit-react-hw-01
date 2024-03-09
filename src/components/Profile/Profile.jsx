import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.firstItem}>
          <span>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
