import styles from '../styles/Gallery.module.css'
import Image from "next/image"

import canyon from "../public/grand1.jpg"
import sdy from "../public/sdy.jpg"
import macchu from "../public/macchu.jpg"
import maldives from "../public/maldives.jpg"
import victoria from "../public/victoria.jpg"
import cap from "../public/cap.jpg"
import colo from "../public/colo.jpg"
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


const Gallery = () => {
  return (
    <section className={styles.gallery} id="gallery">
        <div className={styles.gallery_container}>
            <p className={styles.gallery_header}>
                Our Gallery
            </p>
            <p className={styles.gallery_subheader}>
                We Record Memories
            </p>

            <motion.div className={styles.box_containers}
             initial={"hidden"}
             whileInView={"visible"}
             viewport={{once: true}}
             transition={{staggerChildren: 0.15}}
             variants={boxvariants}
            >
               <motion.div className={styles.box}
                variants={boxvariants}
               >
                    <Image src={canyon} alt="highway"/>
                   
                    <div className={styles.box_desc}>
                        <p className={styles.place} >
                            Grand Canyon
                        </p>
                        <p className={styles.location} >
                           Grand Canyon National park, Arizona
                        </p>
                        <button>Visit</button>
                    </div>
               </motion.div>
               <motion.div className={styles.box}
                variants={boxvariants}
               >
                    <Image src={macchu} alt="highway"/>
                    <div className={styles.box_desc}>
                    <p className={styles.place} >
                            Machu Picchu
                            </p>
                            <p className={styles.location} >
                              A symbol of the Incan Empire 1450AD, Peru
                            </p>
                            <button>Visit</button>    
                    </div>
               </motion.div>
               <motion.div className={styles.box}
                 variants={boxvariants}
               >
                    <Image src={maldives} alt="highway"/>
                    <div className={styles.box_descc}>
                    <p className={styles.place} >
                            Maldives
                            </p>
                            <p className={styles.location} >
                              An archipelagic state situated in the Indian Ocean
                            </p>
                            <button>Visit</button>
                    </div>
               </motion.div>
               <motion.div className={styles.box}
                variants={boxvariants}
               >
                    <Image src={cap} alt="highway"/>
                    <div className={styles.box_desc}>
                    <p className={styles.place} >
                            Cappadocia
                            </p>
                            <p className={styles.location} >
                                Unique rock formations and amazing hot air ballooning opportunities, Turkey
                            </p>
                            <button>Visit</button>
                    </div>

               </motion.div>
               <motion.div className={styles.box}
                variants={boxvariants}
               >
                    <Image src={sdy} alt="highway"/>
                    <div className={styles.box_descc}>
                    <p className={styles.place} >
                            Sydney Opera House
                            </p>
                            <p className={styles.location} >
                            A multi-venue perforimg arts center, Sydney
                            </p>
                            <button>Visit</button>
                    </div>

               </motion.div>
               <motion.div className={styles.box}
                variants={boxvariants}
               >
                    <Image src={victoria} alt="highway"/>
                    <div className={styles.box_desc}>
                    <p className={styles.place} >
                            Victoria Falls
                            </p>
                            <p className={styles.location} >
                               Waterfall on the Zambezi River, zimbabwe
                            </p>
                            <button>Visit</button>
                    </div>

               </motion.div>
               <motion.div className={styles.box}
                variants={boxvariants}
               >
                    <Image src={colo} alt="highway"/>
                    <div className={styles.box_desc}>
                    <p className={styles.place} >
                            Colosseum
                            </p>
                            <p className={styles.location} >
                                An oval amphitheatre in the city of Rome, Italy
                            </p>
                            <button>Visit</button>
                    </div>

               </motion.div>
              
            </motion.div>
        </div>
    </section>
  )
}

export default Gallery