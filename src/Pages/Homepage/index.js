import React from 'react'
import Nav from 'Components/Nav'
import LandingImg from 'Components/LandingImg'
import styles from './styles.module.css'

export default function Homepage() {
  return (
    <div className={styles.home_wrapper}>
      <Nav />

      <div className={styles.content_container}> 
        <LandingImg />

        
        <a className={styles.contact_btn} href={"https://www.amysky99.com/links"} target={"_blank"}>
          Let's Talk
        </a>
      </div>
    </div>
  )
}
