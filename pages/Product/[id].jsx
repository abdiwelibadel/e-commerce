import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'

const Product = ({ice}) => {
 const [size, setSize] = useState(0)
 const [price, setPrice] = useState(ice.price);
 const [quantity, setQuantity] = useState(1)
 const dispatch = useDispatch()

 const handleClick = () => {
   dispatch(addProduct({...ice, price, quantity}))
 }

  return (
    <div className={styles.container}>
     <div className={styles.left}>
      <div className={styles.imgContainer}>
       <Image src={ice.img} layout='fill' alt='' objectFit='fit'/>
      </div>
     </div>
     <div className={styles.right}>
      <h1 className={styles.title}>{ice.title}</h1>
      <span className={styles.price}>KES {ice.price}</span>
      <p className={styles.desc}>{ice.desc}</p>
      <div className={styles.add}>
       <input onChange={(e) => setQuantity(e.target.value)} type='number' defaultValue={1} className={styles.quantity}/>
       <button className={styles.button} onClick={handleClick}>Add to Cart</button>
     </div>
     </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);

  return {
    props: {
      ice: res.data
    }
  }
}

export default Product