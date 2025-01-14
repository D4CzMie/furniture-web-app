import styles from "./CategoryItem.module.css";
import PropTypes from "prop-types";


export const CategoryItem = ({name, img}) => {
    return (
        <div className={styles.menu}>
            <img className={styles.image} src={img} alt={"фотография"}/>
            {name}
            <button className={styles.buttMore}>
                <a href="#">Подробнее</a>
            </button>
        </div>
    )
}

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}