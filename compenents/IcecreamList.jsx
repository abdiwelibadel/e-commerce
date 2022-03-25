import styles from '../styles/IcecreamList.module.css'
import IcecreamCard from './IcecreamCard'

const IcecreamList = ({productList}) => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>Best ice cream in Town</h1>
     <p className={styles.desc}>
      the best flavors of all kinds of ice creams in our stores.
     </p>
     <div className={styles.wrapper}>
       {productList.map((product) => (
          <IcecreamCard key={product._id} product={product}/>
       ))}
     </div>
    </div>
  )
}

export default IcecreamList