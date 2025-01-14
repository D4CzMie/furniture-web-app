import styles from './ReqisterForm.module.css';
import {useState} from "react";


export const ReqisterForm = () => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("+7");
    const [password, setPassword] = useState("");

    const checkInputs = () => {
        return (login === "" || email === "" || number === "" || password === "");
    }

    function handleChange(setter) {
        return (event) => setter(event.target.value);
    }

    return <div className={styles.test}>
        <div className={styles.Form}>
            <h2>Registration</h2>
            <form>
                <label className={styles.inputting}>Login: <input value={login}
                                                                  onChange={handleChange(setLogin)}
                                                                  type="text"/></label>
                <label className={styles.inputting}>Email: <input value={email} onChange={handleChange(setEmail)}
                                                                  type="email"/></label>
                <label className={styles.inputting}>Phone number: <input value={number}
                                                                         onChange={handleChange(setNumber)}
                                                                         type="text"/></label>
                <label className={styles.inputting}>Password: <input value={password}
                                                                     onChange={handleChange(setPassword)}
                                                                     type="password"/></label>
            </form>
            <button onClick={() => console.log(login, email, number, password)}
                    disabled={checkInputs()}>
                Sign up
            </button>
        </div>

    </div>
}
