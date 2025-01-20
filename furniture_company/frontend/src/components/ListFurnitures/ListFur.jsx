import styles from './ListFur.module.css';
import {useEffect, useState} from "react";

export const ListFurnitures = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getTodos = async () => {
            const todos = await fetch('http://127.0.0.1:8000/api/furniture/').then(res => res.json()).then(res => res)
            setTodos(todos)
        }
        getTodos()
    }, []);

    return <div>
        {todos.map(todo => (<div className={styles.menu}>
            <img src={`${todo.image}`} alt={'мебель'} className={styles.image}/>
            <span>{todo.name}</span>
            <span>{todo.description}</span>
            <div></div>
        </div>))}
    </div>

}