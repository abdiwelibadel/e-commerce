import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/ice2.jpg' lt='' layout='fill' objectFit='cover'/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.motto}>
            OH YES, WE DID. THE BADEL ICE CREAM.
          </h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR STORE</h1>
          <p className={styles.text}>
            12th street #304.
            <br/> Eastleigh
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTILL FRIDAY
            <br/> 9.00 - 22.00
          </p>
          <p className={styles.text}>
            SATURDAY  - SUNDAY
            <br/> 12.00 - 24.00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer