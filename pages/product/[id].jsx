import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam delectus, magnam possimus, libero magni sint veniam pariatur tempora quam ex itaque alias error ab doloremque unde illo cum doloribus ipsam!"
    };

  return (
    <div className={styles.container}>
    <div className={styles.left}>
    <div className={styles.imgContainer}>
        <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
    </div>
    </div>
    <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span> 
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose The Size</h3>
        <div className={styles.sizes}>
            <div className={styles.size} onClick={()=>setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(1)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(2)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>Large</span>
            </div>
        </div>
        <h3 className={styles.choose}>Choose Additional Ingridients</h3>
        <div className={styles.ingrideints}>
            <div className={styles.option}>
                <input type="checkbox" name="double" id="double" className={styles.checkbox} />
                <label htmlFor="double">Double Ingridients</label>
            </div>
            <div className={styles.option}>
                <input type="checkbox" name="cheese" id="cheese" className={styles.checkbox} />
                <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div className={styles.option}>
                <input type="checkbox" name="spicy" id="spicy" className={styles.checkbox} />
                <label htmlFor="spicy">Spicy Sauce</label>
            </div>
            <div className={styles.option}>
                <input type="checkbox" name="garlic" id="garlic" className={styles.checkbox} />
                <label htmlFor="garlic">Garlic Sauce</label>
            </div>
        </div> 
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
        </div>
    </div>
    </div> 
  );
}

export default Product;