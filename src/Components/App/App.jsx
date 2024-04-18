import styles from './app.module.css'
import DisplayPersonal from '../Personal/DisplayPersonal/DisplayPersonal.jsx';
import Personal from '../Personal/Personal Form/Personal.jsx';
import SkillsInput from '../Skills/Skills Form/SkillsInput.jsx';
import SkillPreview from '../Skills/Skill Preview/previewSkill.jsx';
import QualiInput from '../Qualifications/Quali Input/Qualifications.jsx';
import QualiPreview from '../Qualifications/Quali Preview/QualiPreview.jsx';
import CurrentSkills from '../Skills/Current Skills/CurrentSkills.jsx';
import QualiCurrent from '../Qualifications/Quali Current/QualiCurrent.jsx';
import { useState } from 'react';

const initialSkills = [
  { id: 0, name: 'Reels Roller'},
  { id: 1, name: 'Pro Sleeper'},
  { id: 2, name: 'Play CS2'},
]

const initialQuali = [
  { id: 0, course: 'Javascript basics', time: 20, date: '24/02/2046'},
  { id: 1, course: 'Data Structure w/ Python', time: 20, date: '24/02/2003'},
  { id: 2, course: 'React', time: 20, date: '24/02/2092'}
]

function App() {
  const [name, setName] = useState('Bukoyo Saka')
  const [email, setEmail] = useState('starboy2024@gmail.com')
  const [number, setNumber] = useState('02834597')
  const [skills, setSkills] = useState(initialSkills)
  const [quali, setQuali] = useState(initialQuali)

  function changeName(e) {
    setName(e)
  }

  function changeEmail(e) {
    setEmail(e)
  }

  function changeNumber(e) {
    setNumber(e)
  }

  return (
    <>
      <aside className={styles.aside}>
        <Personal nameFn={changeName} emailFn={changeEmail} numberFn={changeNumber}></Personal>
        <SkillsInput skills={skills} setSkills={setSkills}/>
        <QualiInput quali={quali} setQuali={setQuali}/>
      </aside>
        <main className={styles.main}>
          <DisplayPersonal name={name} email={email} number={number} />
          <SkillPreview skills={skills}/>
          <QualiPreview quali={quali}/>
        </main>
        <aside className={styles.asideLeft}>
          <CurrentSkills skills={skills} setSkills={setSkills}/>
          <QualiCurrent quali={quali} setQuali={setQuali}/>
        </aside>
    </>

  )
}

export default App

