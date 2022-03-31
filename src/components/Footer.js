import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <ul styles={styles.ul}>
            <li> App by <a className={styles.github}  target="_blank" href="https://oheneadjei.bio.link/">Ohene Adjei</a></li>
        </ul>
    </div>
  )
}

export default Footer