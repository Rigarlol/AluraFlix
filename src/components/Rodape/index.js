import styles from './Rodape.module.css';
import logo from './logo.png'
export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <img src={logo} alt='logo do aluraflix'></img>
        </footer>
    )
}