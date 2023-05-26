import styles from "./singleproductcard.module.css";
import React, { useState } from "react";
import { addTocart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import productService from "../../service/product";
import { useNavigate } from "react-router-dom";

const SingleProductCard = ({ img, title, price, descr, product, id }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate()

const deleteProduct = () => {
    productService.deleteProduct(id)
    .then(res => {
        console.log(res)
        navigate("/store")
    })
    .catch(err => {
        console.log(err)
    })
}

    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles["img-wrapper"]}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.price}>{price}</p>
                    <p className={styles.descr}>{descr}</p>
                    <div className={styles["control-wrapper"]}>
                        <div className={styles.quantity}>
                            <button
                                className={styles["quantity-control"]}
                                onClick={() =>
                                    quantity > 1 && setQuantity(quantity - 1)
                                }
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                className={styles["quantity-control"]}
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className={styles.add}
                            onClick={() => dispatch(addTocart({...product, quantity}))}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.control}>
                        <button className={styles.delete}  onClick={deleteProduct}>delete</button>
                        <button className={styles.update}>update</button>
                </div>
        </div>
    );
};

export default SingleProductCard;
