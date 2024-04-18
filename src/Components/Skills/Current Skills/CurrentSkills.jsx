/* eslint-disable react/prop-types */
import styles from './currentSkills.module.css'

function CurrentSkills({skills, setSkills}) {
    function changeSkill(notSkill) {
        const updatedSkills = skills.filter(skill => skill.id !== notSkill.id);
        setSkills(updatedSkills);
    }

    return (
        <div className={styles.current}>
            <h3 className={styles.h3}>Current Skills</h3>
            <ul className={styles.ul}>
                {skills.map((skill) => {
                    return <li className={styles.li} key={skill.id}>
                                {skill.name}
                                <button className={styles.button}onClick={() => changeSkill(skill)}>Remove</button>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default CurrentSkills