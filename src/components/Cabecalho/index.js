import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';
import CabecalhoLink from 'components/CabecalhoLink';

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link>
                <img src={logo} alt="Logo do site"></img>
            </Link>
            <nav className={styles.menu}>
                <CabecalhoLink url="/">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="/NovoVideo">
                    Novo Vídeo
                </CabecalhoLink>
            </nav>
        </header>
    )
}

