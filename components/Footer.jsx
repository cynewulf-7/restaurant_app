import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt=""/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YEAH, GOT THE SPICIEST AND YUMMYIEST PIZZA IN TOWN.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            FIND OUR RESTAURANTS
          </h1>
          <p className={styles.text}>
            2323 Beverly Road #304.
            <br /> California, 34984
            <br /> (604) 568-5673
          </p>
          <p className={styles.text}>
            2325 Axey St #235.
            <br /> California, 34984
            <br /> (604) 568-5673
          </p>
          <p className={styles.text}>
            2773 T. Carow Ave #104.
            <br /> California, 34984
            <br /> (604) 538-5423
          </p>
          <p className={styles.text}>
            2984 Bronx Road #125.
            <br /> California, 34984
            <br /> (604) 564-5637
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            WORKING HOURS
          </h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br /> 9.00 - 22.00
          </p>
          <p className={styles.text}>
            SATURDAY & SUNDAY
            <br /> 12.00 - 24.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;