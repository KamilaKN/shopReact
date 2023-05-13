import React, { useState } from "react";
import { authServices } from "../../service/auth";

const RegisterForm = ({ styles }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { registration } = authServices();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            email,
            username,
            password,
        };
      try {
        const {data} = await registration(newUser)
        console.log(data._doc)
      } catch (err) {
        console.log(err.response.data)
      }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Register</h2>
            <div className={styles.control}>
                <label htmlFor="email" className={styles.label}>
                    Email address
                </label>
                <input
                    id={"email"}
                    type="email"
                    placeholder="email"
                    name="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.control}>
                <label htmlFor="username" className={styles.label}>
                    User name
                </label>
                <input
                    id={"username"}
                    type="text"
                    placeholder="User name"
                    name="username"
                    className={styles.input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className={styles.control}>
                <label htmlFor="password" className={styles.label}>
                    Password
                </label>
                <input
                    id={"password"}
                    type="password"
                    placeholder="pass"
                    name="password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <input type="submit" value="Register" className={styles.submit} />
        </form>
    );
};

export default RegisterForm;
