import styles from './Counter.module.css';
import {useState} from "react";


export const Counter = () => {
    const [count, setCount] = useState(0);
    return <div className={styles.counter}>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>plus</button>
        <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
}