import styles from './MainMenu.module.css';
import {Link} from "react-router-dom";

export const MainMenu = () => {
    return <div>
        <div className={styles.blackBlock} style={{paddingTop: 65}}>
            <div style={{fontSize: 64}}>Мы делаем мебель <br/>
                которая служит вам
            </div>
            <div style={{fontFamily: "Inter", fontWeight: 200}}>
                Качество, идущее в ногу с комфортом!
            </div>
        </div>
        <div className={styles.transition}></div>
        <div className={styles.colorBlock}>
            <div style={{fontSize: 64}}> Мебель</div>
            <div style={{fontFamily: "Inter", fontWeight: 200}}>
                Мы делаем мебель под ваш заказ
            </div>
            <button className={styles.buttMore}>
                <Link to="furniture" onClick={() => window.scrollTo(0, 0)}>Подробнее</Link>
            </button>
        </div>
    </div>
}