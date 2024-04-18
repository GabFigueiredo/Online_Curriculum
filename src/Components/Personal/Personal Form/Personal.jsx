/* eslint-disable react/prop-types */
import styles from './personal.module.css'

function Personal(props) {

    function changeName(event) {
        props.nameFn(event.target.value)
    }

    function changeEmail(event) {
        props.emailFn(event.target.value)
    }

    function changeNumber(event) {
        props.numberFn(event.target.value)
    }
    
    return (
        <div className={styles.personal}>
            <h3 className={styles.h3}>Personal Information</h3>

            <p className={styles.p}>Name:</p>
            <input onChange={changeName}/>
            <p className={styles.p}>Email:</p>
            <input onChange={changeEmail}/>
            <p className={styles.p}>Number:</p>
            <input onChange={changeNumber}/>
            
        </div>
    )
}

export default Personal