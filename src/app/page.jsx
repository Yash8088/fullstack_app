import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContaner}>
        <h1 className={styles.title}>Innovative Minds Agency.</h1>
        <p className={styles.desc}>
          Cultivating creativity, one idea at a time.
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>Learn More</button>
          </Link>
          <Link href="/contact">
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
