import axios from 'axios'
import { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../compenents/Featured'
import IcecreamList from '../compenents/IcecreamList'
import styles from '../styles/Home.module.css'
import AddButton from '../compenents/AddButton'
import Add from '../compenents/Add';

export default function Home({productList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <div >
      <Head>
        <title>Ice Cream Shop</title>
        <meta name="description" content="best ice cream shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {<AddButton setClose={setClose} />}
      <IcecreamList productList={productList}/>
       {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      productList: res.data,
      admin
    }
  }
}