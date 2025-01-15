import styles from "./Navbar.module.css";
import {Link, NavLink} from "react-router-dom";
import Modal from "react-modal"
import {useState} from "react";

export const Navbar = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const checkInputs = () => {
        return (login === "" || password === "");
    }

    function handleChange(setter) {
        return (event) => setter(event.target.value);
    }

    const [isModalVisible, setIsModalVisible] = useState(false)
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }
    return <header className={styles.header}>
        <Modal isOpen={isModalVisible}
               onRequestClose={toggleModal}
               className={styles.modal}
               overlayClassName={styles.overlay}
               contentLabel="Example Modal">
            <div className={styles.modal__content}>
                Авторизация
                <form style={{display: "flex", flexDirection: "column", gap: 3}}>
                    <span className={styles.textInput}><input value={login} onChange={handleChange(setLogin)}
                                                              type="text" placeholder={"Логин"}/></span> <br/>
                    <span className={styles.textInput}><input value={password} onChange={handleChange(setPassword)}
                                                              type="password" placeholder={"Пароль"}/></span>
                </form>
                <button className={styles.in} onClick={() => console.log(login, password)}
                        disabled={checkInputs()}>
                    Войти
                </button>
            </div>
        </Modal>

        <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className={styles.logo}>Лого</NavLink>

        <nav className={styles.navbar}>
            <Link to="/furniture" onClick={() => window.scrollTo(0, 0)}>Мебель</Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>О нас</Link>
        </nav>

        <button onClick={toggleModal} className={styles.button}>
            <div className={styles.adidas}></div>
            <div className={styles.adidas}></div>
            <div className={styles.adidas}></div>
        </button>
    </header>
}