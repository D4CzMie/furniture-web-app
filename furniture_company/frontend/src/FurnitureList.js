import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FurnitureList = () => {
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        const fetchFurniture = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/furniture/');
            setFurniture(response.data);
        };

        fetchFurniture();
    }, []);

    return (
        <div>
            <h1>Мебель</h1>
            <div className="furniture-list">
                {furniture.map(item => (
                    <div key={item.id} className="furniture-item">
                        <h2>{item.name}</h2>
                        <img src={`http://127.0.0.1:8000/${item.image}`} alt={item.name} />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FurnitureList;