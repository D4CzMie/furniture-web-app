import fur0 from "/src/assets/fur0.jpg"
import fur2 from "/src/assets/fur2.jpg"
import fur4 from "/src/assets/fur4.jpg"
import {CategoryItem} from "../CategoryItem/index.js";
const categories = [
    {name: "Шкафы-купе", img: fur0},
    {name: "Кухни", img: fur4},
    {name: "Мебель под заказ", img: fur2}
]
export const FurMenu = () => {
    return <div>
        {categories.map(category => (<CategoryItem key={category.name} name={category.name} img={category.img} />))}
    </div>
}