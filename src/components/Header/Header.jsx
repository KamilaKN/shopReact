import React from "react";
import styles from "./header.module.css";
import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const isOpen = useSelector((state) => state.cart.isOpen);
    const cartQuantity = useSelector((state) => state.cart.quantityCart);
    return (
        <>
            <header>
                <div className={styles.wrapper}>
                    <nav className={styles.nav}>
                        <NavLink to="/home" className={styles.link}>
                            Home
                        </NavLink>
                        <NavLink to="/account" className={styles.link}>
                            Account
                        </NavLink>
                        <NavLink to="/store" className={styles.link}>
                            Shop
                        </NavLink>
                        <NavLink to="/contacts" className={styles.link}>
                            Contact
                        </NavLink>
                    </nav>
                    <div className={styles.icons}>
                        <NavLink to="/account" className={styles.icon}>
                            <img
                                src="/images/profile-icon.png"
                                alt=""
                                className={styles.icon}
                            />
                        </NavLink>
                        <p className={styles.icon}>
                            <img
                                src="/images/search-icon.png"
                                alt=""
                                className={styles.icon}
                            />
                        </p>
                        <p className={styles.icon}>
                            <img
                                src="/images/favorite-icon.png"
                                alt=""
                                className={styles.icon}
                            />
                        </p>
                        <NavLink to="/cart" className={styles.icon}>
                            {cartQuantity > 0 && (
                                <span className={styles.quantity}>
                                    {cartQuantity}
                                </span>
                            )}
                            <img
                                src="/images/basket-icon.png "
                                alt=""
                                className={styles.icon}
                                
                            />
                        </NavLink>
                    </div>
                    {isOpen && <Modal/>}
                </div>
            </header>
        </>
    );
};

export default Header;
