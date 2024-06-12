import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>IMA</div>
      <div className={styles.text}>
        Yash Innovative Thoughts Agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
