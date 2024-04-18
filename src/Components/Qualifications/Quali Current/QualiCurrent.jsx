/* eslint-disable react/prop-types */
import styles from './qualiCurrent.module.css'

function QualiCurrent({quali, setQuali}) {

    function changeQuali(notQuali) {
        const newQuali = quali.filter(q => q.id !== notQuali.id)
        console.log(newQuali)
        setQuali(newQuali)
    }
    
    return (
        <div className={styles.current}>
            <h3 className={styles.h3}>Current Qualifications</h3>
            <ul className={styles.ul}>
                {quali.map(item => {
                    return <li className={styles.li} key={item.id}>
                                {item.course}
                                <button className={styles.button} onClick={() => changeQuali(item)}>remove</button>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default QualiCurrent