import React from "react";
import styles from "./checkout.module.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import {  useSelector } from "react-redux";
import { CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const sum = useSelector(state => state.cart.sum)
    return (
        <>
            <Breadcrumbs />
            <h1>Сумма оплать: {sum}</h1>
            <div className={styles.wrapper}>
                <form className={styles.card}>
                    <div>
                      <CardElement />
                    </div>
                    <button>Pay</button>
                </form>

                <div className={styles["product-wrapper"]}>
                    <p className={styles["product-title"]}>
                        {" "}
                        Product <span>Subtotal</span>{" "}
                    </p>
                    <p className={styles["product-name"]}>
                        {" "}
                        Asgaard sofa <span>Rs. 250000</span>{" "}
                    </p>
                    <p className={styles["product-subtotal"]}>
                        {" "}
                        Asgaard sofa <span>Rs. 250000</span>{" "}
                    </p>
                    <p className={styles["product-total"]}>
                        {" "}
                        Total <span>Rs. 250000</span>{" "}
                    </p>
                </div>
            </div>
        </>
    );
};

export default CheckoutForm;
