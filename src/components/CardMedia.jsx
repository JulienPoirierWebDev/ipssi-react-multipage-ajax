import styles from "./CardMedia.module.css";

const CardMedia = ({ medium }) => {
  return (
    <li className={styles.item}>
      <img src={medium.src} alt="" />
      <p>{medium.content}</p>
    </li>
  );
};

export default CardMedia;
