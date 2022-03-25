import Image from 'next/image'
import styles from '../styles/IcecreamCard.module.css'
import Link from 'next/link'

const IcecreamCard = ({product}) => {
  return (
    <div className={styles.container}>
      <Link href={`/Product/${product._id}`} passHref>
       <Image src={product.img} alt='' width='500' height='500'/>
      </Link>
     <h1 className={styles.title}>{product.title}</h1>
     <span className={styles.price}>{product.price}</span>
     <p className={styles.desc}>
      {product.desc}
     </p>
    </div>
  )
}

export default IcecreamCard