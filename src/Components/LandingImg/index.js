import React from 'react'
import styles from './styles.module.css'

export default function LandingImg() {
  return (
    <div className={styles.LandingImg}>

      <div className={styles.btn_container}>
        <div className={styles.announcement_container}>
          <h3 className={styles.announcement_main}>
            Daily Twitch Streams 
          </h3>

          <h4 className={styles.announcement_second}>
            6PM GMT
          </h4>
        </div>
        
        <a className={styles.landing_link} target={"_blank"} href={"https://www.twitch.tv/amysky99x"}>
          Join My Stream
        </a>
      </div>

      <div className={styles.img_bg}/>
      
    </div>
  )
}
