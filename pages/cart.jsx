import Image from "next/image"
import styles from '../styles/Cart.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { reset } from '../redux/cartSlice'

import axios from "axios";
import OrderDetail from '../compenents/OrderDetail'


const Cart = () => {
  const [open, setOpen] = useState(false)
  const cart = useSelector((state) => state.cart)
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "KES";
  const style = { layout: "vertical" };
  const dispatch = useDispatch()
  const router = useRouter()

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={styles.container}>
     <div className={styles.left}>
      <table className={styles.table}>
        <tbody>
       <tr className={styles.tr}>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
       </tr>
       </tbody>
       <tbody>
       {cart.products.map((product) => (
       <tr key={product._id}>
        <td>
          <div className={styles.imgContainer}>
          <Image src={product.img} objectFit='cover' layout="fill" alt='' />
          </div>
        </td>
        <td>
          <span className={styles.name}>{product.title}</span>
        </td>
        <td>
          <span className={styles.total}>KES {product.price}</span>
        </td>
        <td>
        <span className={styles.quantity}>{product.quantity}</span>
        </td>
        <td>
          <span className={styles.total}>KES {product.price * product.quantity}</span>
        </td>
        <td></td>
       </tr>
       ))}
       </tbody>
      </table>
     </div>
     <div className={styles.right}>
      <div className={styles.wrapper}>
       <h2 className={styles.title}>CART TOTAL</h2>
       <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>KES {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Delivery:</b>KES 0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>KES {cart.total}
          </div>
           {open ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW!
            </button>
          )}
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} /> }
     </div>
    </div>
  )
}

export default Cart