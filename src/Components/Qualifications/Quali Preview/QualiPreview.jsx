/* eslint-disable react/prop-types */
import style from './qualipreview.module.css'

function QualiPreview({ quali }) {
    return (
        <section className={style.section}>
            <h2 className={style.h2}>Qualifications</h2>
            <ul className={style.ul}>
                {quali.map(item => {
                    return <li className={style.li} key={item.id}>
                                <h3 className={style.width}>{item.course} <span className={style.width} id={style.hour}>{item.time} hours</span></h3>
                                <p className={style.width}>{item.date}</p>
                            </li>     
                })}
            </ul>
        </section>
    )
}

export default QualiPreview