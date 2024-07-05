import styles from './Banner.module.css';
import backgroundImage from './banner.png';
import card from './card.png';

export default function Banner(){
    return(
        <div className={styles.container}>
            <img src={backgroundImage} alt="Background" className={styles.banner} />
            <img src={card} alt="card-meio" className={styles.card} />
          
        </div>
        
    )
}