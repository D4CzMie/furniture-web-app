import styles from './About.module.css'

export const About = () => {
    return <div>
        <div className={styles.back}>
            <div className={styles.person}>
                <img src={"https://getgreencard.ru/wp-content/uploads/2020/09/5-768x768.jpg"}
                     className={styles.portrait} alt={""}/>
                <div> Иванов Дмитрий Андреевич </div>
                <div> Владелец </div>
            </div>
            <div className={styles.person}>
                <img src={"https://cdn1.flamp.ru/f620d24caf0b31cbb5a889595d81375e.jpg"}
                     className={styles.portrait} alt={""}/>
                <div> Смирнов Сергей Владимирович </div>
                <div> Директор </div>
            </div>
        </div>
        <div className={styles.transition}></div>
        <div className={styles.back} style={{fontWeight: 300, fontSize: 20, textWrap: 'wrap', height: '30vh'}}>
            Мы, "Название", занимаемся продажей мебели уже на протяжении 5 лет. Также делаем мебель под предпочтения клиента.<br/>
            За это время мы получили 2000+ мебели под заказ, которые по сей день радуют наших клинетов каждый день.
        </div>
    </div>
}