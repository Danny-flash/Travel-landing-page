import { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { BsFillGrid3X3GapFill} from 'react-icons/bs';
import {motion} from "framer-motion"
import logo from "../public/logo.png"
import Image from "next/image"

const buttonvariants = {
    hidden: { 
      x: "100vw",
      opacity:0 
    },
    visible: { 
      x:0,
      opacity: 1,
      stiffness: 100
    }
  }
  const Loadvariants = {
    hidden: {x: "-100vw",
    },
    visible: { x: 0,
       transition: {
            type: "spring",
            duration: 1.5
       },
    }
  }

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)

  return (
    <nav className={styles.container}>
        <div className={styles.sub_container}>
            <div className={styles.logo}>
                <Image src={logo} alt="highway"/>
            </div>
            <motion.ul className={styles.navLinks}
               initial={"hidden"}
               animate={"visible"}
               transition={{staggerChildren: 0.5}}
               whileInView={"visible"}
             viewport={{once: false}}
               variants={buttonvariants}
            >
                <motion.li
                  variants={buttonvariants}
                ><a href="#">Home</a></motion.li>
                <motion.li
                  variants={buttonvariants}
                ><a href="#gallery">Gallery</a></motion.li>
                <motion.li
                  variants={buttonvariants}
                ><a href="#pricing">Pricing</a></motion.li>
            </motion.ul>
            
          <BsFillGrid3X3GapFill className={styles.burger}
            onClick={() => setShowNav(!showNav)}
          />
          {
                showNav && <motion.ul className={styles.sec_navLinks} onClick={()=> setShowNav(false)}
                initial="hidden"
                animate="visible"
                exit={{
                  x: "-100vw",
                 transition:{ ease: 'easeInOut'}
                }}
                variants={Loadvariants}
                 >
                <li><a href="">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#pricing">Pricing</a></li>
            </motion.ul>
            }
        </div>
    </nav>
  )
}

export default Navbar