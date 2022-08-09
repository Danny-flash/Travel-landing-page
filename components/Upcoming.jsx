import styles from '../styles/Upcoming.module.css'
import {motion} from "framer-motion"
import Image from "next/image"
import sahara from "../public/sahara.jpg"
import venice from "../public/venice.jpg"
import turkey from "../public/turkey.jpg"
import petra from "../public/petra.jpg"

const Upcoming = () => {
  return (
    <section className={styles.upcoming} id="premium">
        <div className={styles.container}>
            <div className={styles.left}>
                <header>Premium Tours & Destination</header>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente at ut possimus et. Corporis aliquam nisi impedit, ipsa quibusdam dolor quisquam necessitatibus perferendis obcaecati itaque maxime, illo illum quod omnis.</p>
                <button>Learn More</button>
            </div>
              <div className={styles.pc}>
              <motion.div className={styles.img}
                 animate={{
                    x: [ "0px","260px", "260px", "0px", "0px"],
                    y: ["0px", "0px", "207px", "207px", "0px"],
                  }}
                  transition={{
                   duration: 20,
                    yoyo: Infinity
                  }} 
              >
                <Image src={sahara} height={500} alt="highway"/>
              </motion.div>
              <motion.div className={styles.img}
                animate={{
                    x: [ "0px","0px", "-260px", "-260px", "0px"],
                    y: ["0px", "207px", "207px", "0px", "0px"],
                  }}
                  transition={{
                    duration: 20,
                    yoyo: Infinity,
                  }} 
              >
                <Image src={venice} height={500} alt="highway"/>
              </motion.div>
              <motion.div className={styles.img}
                 animate={{
                    x: [ "0px","0px", "260px", "260px", "0px"],
                    y: ["0px", "-207px", "-207px", "0px", "0px"],
                  }}
                  transition={{
                    duration: 20,
                    yoyo: Infinity
                  }} 
              >
                <Image src={turkey} height={500} alt="highway"/>
              </motion.div>
              <motion.div className={styles.img}
               animate={{
                x: [ "0px","-260px", "-260px", "0px", "0px"],
                y: ["0px", "0px", "-207px", "-207px", "0px"],
              }}
              transition={{
                duration: 20,
                yoyo: Infinity
              }} 
              >
                <Image src={petra} height={500} alt="highway"/>
              </motion.div>
              </div>
              <div className={styles.mobile}>
              <div className={styles.right}>
              <motion.div className={styles.img}
                 animate={{
                    x: [ "0px","140px", "140px", "0px", "0px"],
                    y: ["0px", "0px", "115px", "115px", "0px"],
                  }}
                  transition={{
                   duration: 20,
                    yoyo: Infinity
                  }} 
              >
                <Image src={sahara} height={500} alt="highway"/>
              </motion.div>
              <motion.div className={styles.img}
                 animate={{
                    x: [ "0px","0px", "-140px", "-140px", "0px"],
                    y: ["0px", "115px", "115px", "0px", "0px"],
                  }}
                  transition={{
                    duration: 20,
                    yoyo: Infinity,
                  }} 
              >
                <Image src={venice} height={500} alt="highway"/>
              </motion.div>
              <motion.div className={styles.img}
                    animate={{
                        x: [ "0px","0px", "140px", "140px", "0px"],
                        y: ["0px", "-115px", "-115px", "0px", "0px"],
                      }}
                      transition={{
                        duration: 20,
                        yoyo: Infinity
                      }} 
              >
                <Image src={turkey} height={500} alt="highway"/>
              </motion.div>
              <motion.div className={styles.img}
                 animate={{
                    x: [ "0px","-140px", "-140px", "0px", "0px"],
                    y: ["0px", "0px", "-115px", "-115px", "0px"],
                  }}
                  transition={{
                    duration: 20,
                    yoyo: Infinity
                  }} 
              >
                <Image src={petra} height={500} alt="highway"/>
              </motion.div>
            </div>
              </div>
        </div>
    </section>
  )
}

export default Upcoming