import styles from "./CategoryItem.module.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


export const CategoryItem = ({name, img}) => {
    return (
        <div className={styles.menu}>
            <img className={styles.image} src={img} alt={""}/>
            {name}
            <button className={styles.buttMore}>
                <Link to="list">Подробнее</Link>
            </button>
        </div>
    )
}

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}