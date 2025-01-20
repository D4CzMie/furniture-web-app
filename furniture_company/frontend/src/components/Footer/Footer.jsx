import styles from './Footer.module.css'

export const Footer = () => {
    return <footer className={styles.Footer}>
        <div className={styles.Left}>
            <div style={{fontSize: 24}}>
                ООО «СЕВА»
            </div>
            692918, Приморский Край, Г.Находка, <br/>
            б-р Озерный, д.10, этаж 2, офис 218
        </div>
        <div className={styles.Right}>
            <div>
                +7 123 456 7890
            </div>
            <div>
                2019-2025
            </div>
        </div>
</footer>
}