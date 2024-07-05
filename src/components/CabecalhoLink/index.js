import { NavLink } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

export default function CabecalhoLink({ children, url }){
    return (
        <NavLink to={url} className={({ isActive }) => isActive ? styles.linkAtivo : styles.link}>
            {children}
        </NavLink>
    )
}