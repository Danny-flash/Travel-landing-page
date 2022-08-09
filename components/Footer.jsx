import styles from '../styles/Footer.module.css'
import Image from "next/image"
import footer from "../public/footer2.jpg"
import { BsTwitter,BsLinkedin,BsFacebook } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import {motion} from "framer-motion"


const boxvariants = {
    hidden: { 
      x: -100,
      opacity:0 
    },
    visible: { 
      x:0,
      opacity: 1
    }
  }

const Footer = () => {

    const time = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
           <div className={styles.abs}>
           <div className={styles.image}>
              <Image src={footer} height={500} alt="footer-image"/>
            </div>
           </div>

            <motion.div className={styles.body}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{once: false}}
              transition={{staggerChildren: 0.2}}
              variants={boxvariants}
            >
                <motion.div className={styles.newsletter}
                variants={boxvariants}
                >
                    <input type="text"
                     placeholder='Type your e-mail'
                    />
                    <button>Subscribe Now!</button>
                </motion.div>

                <motion.div className={styles.links}
                 variants={boxvariants}
                >
                    <motion.div className={styles.first}>
                        <motion.p>Partnership</motion.p>
                        <motion.a href="">Websites</motion.a>
                        <motion.a href="">Social Media</motion.a>
                        <motion.a href="">Branding</motion.a>
                    </motion.div>
                    <motion.div className={styles.first}>
                        <motion.p>About</motion.p>
                        <motion.a href="">Our Gallery</motion.a>
                        <motion.a href="">Pricings</motion.a>
                    </motion.div>
                    <motion.div className={styles.first}>
                        <motion.p>Partnership</motion.p>
                        <motion.a href="">Support Request</motion.a>
                        <motion.a href="">Contact</motion.a>
                    </motion.div>
                </motion.div>
                <motion.div className={styles.under}variants={boxvariants}>
                    <motion.p>All rights reserved {time}</motion.p>
                    <motion.div className={styles.icons}>
                        <motion.a href=""><BsTwitter className={styles.icon}/></motion.a>
                        <motion.a href=""><BsLinkedin className={styles.icon}/></motion.a>
                        <motion.a href=""><AiFillYoutube className={styles.icon}/></motion.a>
                        <motion.a href=""><BsFacebook className={styles.icon}/></motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </footer>
  )
}

export default Footer