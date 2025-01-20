import styles from './ListFur.module.css';
import {useEffect, useState} from "react";


// const FurnitureList = () => {
//     const [furniture, setFurniture] = useState([]);
//
//     useEffect(() => {
//         const fetchFurniture = async () => {
//             const response = await axios.get('http://127.0.0.1:8000/api/furniture/');
//             setFurniture(response.data);
//         };
//         fetchFurniture();
//     }, []);
//
//     return (
//         <div>
//             <h1>Мебель</h1>
//             <div className="furniture-list">
//                 {furniture.map(item => (
//                     <div key={item.id} className="furniture-item">
//                         <h2>{item.name}</h2>
//                         <img src={`http://127.0.0.1:8000/${item.image}`} alt={item.name} />
//                         <p>{item.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

export const ListFurnitures = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getTodos = async () => {
            const todos = await fetch('http://127.0.0.1:8000/api/furniture/').then(res => res.json())
            setTodos(todos)
        }
        getTodos()
    }, []);

    return <div>
        {todos.map(todo => <div>{todo.description}</div>)}
    </div>
}