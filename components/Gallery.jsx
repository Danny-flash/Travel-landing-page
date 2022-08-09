import styles from '../styles/Gallery.module.css'
import Image from "next/image"
import grand from "../public/grand.jpg"
import cappadocia from "../public/cappadocia.jpg"
import macchu from "../public/macchu.jpg"
import maldives from "../public/maldives.jpg"
import sydney from "../public/sydney.jpg"
import victoria from "../public/victoria.jpg"
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
                    <Image src={grand}/>
                   
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
                    <Image src={macchu}/>
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
                    <Image src={maldives}/>
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
                    <Image src={cappadocia}/>
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
                    <Image src={sydney}/>
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
                    <Image src={victoria}/>
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
                    <Image src={colo}/>
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