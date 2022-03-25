import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({setClose}) => {
 const [file, setFile] = useState(null)
 const [title, setTitle] = useState(null)
 const [price, setPrice] = useState(null)
 const [desc, setDesc] = useState(null)

 const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/fije/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        price,
        
        img: url,
      };

      await axios.post("http://localhost:3000/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
     <div className={styles.wrapper}>
      <span onClick={() => setClose(true)} className={styles.close}>X</span>
      <h1>Add New Ice Cream</h1>
      <div className={styles.item}>
       <label className={styles.label}>chosose image</label>
       <input type='file' onChange={(e) => setFile(e.target.value)}/>
      </div>
      <div className={styles.item}>
       <label className={styles.label}>Title</label>
       <input type='text' onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className={styles.item}>
       <label className={styles.label}>Desc</label>
       <textarea type='text' rows={4} onChange={(e) => setDesc(e.target.value)}/>
      </div>
      <div className={styles.item}>
       <label className={styles.label}>Price</label>
       <input type='number' onChange={(e) => setPrice(e.target.value)}/>
      </div>
      <button className={styles.addButton} onClick={handleCreate}>
       Create
      </button>
     </div>
    </div>
  )
}

export default Add