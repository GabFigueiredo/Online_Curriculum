/* eslint-disable react/prop-types */
import styles from './display.module.css'

function DisplayPersonal(props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>{props.name}</h1>
            <p className={styles.p}>{props.email}</p>
            <p className={styles.p}>{props.number}</p>
        </header>
    )
}

export default DisplayPersonal