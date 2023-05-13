import React from 'react';
import styles from './product.module.css'
import { Link, NavLink } from 'react-router-dom';

const Product = ({img, title, price, date, id, gridView}) => {
    // const gridView = true
    return (
        <div className={gridView ? styles.card : styles["card-list"]}>
            <img src={img} alt="" className={styles.img} />
            <div className={styles.info}>
                <Link to={`/product/${id}`} className={styles.name}>
                {title}
                </Link>
                <h4 className={styles.price}>
                    {price}
                </h4>
                <p>{new Date(date).toString()}</p>
            </div>
        </div>
    );
};

export default Product;