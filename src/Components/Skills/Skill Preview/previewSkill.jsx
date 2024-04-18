/* eslint-disable react/prop-types */
import styles from './previewskill.module.css'

function SkillPreview({ skills }) {
    return (
        <section className={styles.section}>
            <h2>Skills: </h2>
            <ul className={styles.ul}>
                {skills.map((skill) => {
                    return <li className={styles.li} key={skill.id}>{skill.name}</li>
                })}
            </ul>
        </section>
    )
}

export default SkillPreview