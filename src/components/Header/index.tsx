import Logo from '../../assets/Logo.svg'
import styles from './style.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={Logo}/>
        </div>
    )
}