import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image"
import Earth from "../public/earth2.png"
import highway from "../public/highway.png"
import beach from "../public/beach.png"
import luggage from "../public/luggage.png"
import {motion} from "framer-motion"

const Frontpage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.earth}>
        <Image src={Earth} alt="earth"/>
        </div>
        
      <div className={styles.front_flex}>
        <div className={styles.left}>
          <p className={styles.header}>EXPLORE <span>DREAM</span> DESTINATION </p>
          <p className={styles.subheader}>Tour around the world with the new destination</p>
          <button><a href="#premium">Explore</a></button>
        </div>
        <div className={styles.right}>
       <motion.div className={styles.highway}
          animate={{
            rotate: 360,
          }}
          transition={{
           duration: 60,
            yoyo: Infinity
          }} 
       >
        <Image src={highway} alt="highway"/>
        </motion.div>
        <motion.div className={styles.beach}
          animate={{
            y: ["0px", "5px", "-5px", "0px"],
          }}
          transition={{
           duration: 3,
            yoyo: Infinity
          }} 
        >
        <Image src={beach} alt="highway"/>
        </motion.div>
        <motion.div className={styles.luggage}
         animate={{
          y: ["0px", "5px", "-5px", "0px"],
        }}
        transition={{
         duration: 3,
          yoyo: Infinity
        }} 
        >
        <Image src={luggage} alt="highway"/>
        </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Frontpage