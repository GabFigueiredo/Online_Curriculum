/* eslint-disable react/prop-types */
import styles from './skills.module.css'
import { useState } from 'react'

let nextId = 3
function SkillsInput({skills, setSkills}) {
    const [name, setName] = useState('')

    function pushToList() {
            setSkills([
            ...skills,
                {name: name,
                id: nextId++}
        ])
    }
    
    return (
        <div className={styles.skills}>
            <div className={styles.titleButton}>
                <h3 className={styles.h3}>Skills</h3>
                <button className={styles.button} onClick={pushToList}>+</button>       
            </div>
            <input className={styles.input}value={name} onChange={e => setName(e.target.value)}/>
        </div>
    )
}

export default SkillsInput