/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './qualification.module.css'

let nextId = 4
function QualiInput({quali, setQuali}) {
    const [course, setCourse] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')

    function changeTime(event) {
        setTime(event.target.value)
    }

    function changeCourse(event) {
        setCourse(event.target.value)
    }

    function changeDate(event) {
        setDate(event.target.value)
    }

    function pushToList() {
        setQuali([
            ...quali,
            {course: course, time: time, date: date, id: nextId++}
        ])
    }

    return (
        <div className={style.qualification}>
            <div className={style.titleButton}>
                <h3>Qualifications</h3>
                <button id={style.button} onClick={pushToList}>+</button>
            </div>
            <p>Course:</p>
            <input type="text" onChange={changeCourse} />
            <p>Time:</p>
            <input type="number" onChange={changeTime} />
            <p>Date: </p>
            <input type="date" onChange={changeDate} />
        </div>
    )
}

export default QualiInput