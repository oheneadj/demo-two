import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <ul styles={styles.ul}>
            <li> App by <a className={styles.github}  target="_blank" href="https://oheneadjei.bio.link/">Ohene Adjei</a> with <a className={styles.github} target="_blank" href="https://api.adviceslip.com/">Advice Slip API</a>  </li>
        </ul>
    </div>
  )
}

export default Footer