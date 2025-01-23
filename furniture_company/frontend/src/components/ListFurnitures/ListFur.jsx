import styles from './ListFur.module.css';
import {Navbar} from "../Navbar/index.js";
import {useEffect, useState} from "react";

export const ListFurnitures = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getTodos = async () => {
            const todos = await fetch('https://zmie.pythonanywhere.com/api/furniture/').then(res => res.json()).then(res => res)
            setTodos(todos)
        }
        getTodos()
    }, []);

    return (
        <>
            <Navbar/>
            <div>
                {todos.map(todo => (
                    <div key={todo.name} className={styles.menu}>
                        <img src={`${todo.image}`} alt={'мебель'} className={styles.image}/>
                        <span>{todo.name}</span>
                        <span>{todo.description}</span>
                    </div>
                ))}
            </div>
        </>    
    )
}
