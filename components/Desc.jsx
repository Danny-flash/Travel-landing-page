import styles from '../styles/Desc.module.css'
import { FaWalking, FaHotel, FaMoneyBillWaveAlt, FaPlaneDeparture } from 'react-icons/fa';
import { GiEarthAsiaOceania, GiForkKnifeSpoon } from 'react-icons/gi';
import { RiCustomerServiceFill } from 'react-icons/ri';
import {motion} from "framer-motion"


const boxvariants = {
    hidden: { 
      x: -100,
      opacity:0 
    },
    visible: { 
      x:0,
      y: 0,
      opacity: 1
    }
  }


const Desc = () => {



  return (
    <section className={styles.desc}>
        <div className={styles.desc_container}>
        <p className={styles.gallery_header}>
                Our Services
            </p>
            <p className={styles.gallery_subheader}>
                What We Offer
            </p>
        <motion.div className={styles.card_container}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{once: true, amount: .05}}
          transition={{staggerChildren: 0.2}}
          variants={boxvariants}>
        
            
            <motion.div className={styles.card}
              variants={boxvariants}
            >
       <div className={styles.content}
       
       > 
             
           <div className={styles.front}>
               <FaWalking className={styles.icon}/>
               <h3 className={styles.title}>Adventure</h3>
               <button className={styles.subtitle}><FaPlaneDeparture className={styles.btn_icon}/> More Info</button>
           </div>

           <div className={styles.back}>
               <div className={styles.description}>
                <p>Exciting and Daring Experiences</p>
               </div>
           </div>
       </div>
   </motion.div>
            <motion.div className={styles.card}
              variants={boxvariants}
            >
       <div className={styles.content}>
           <div className={styles.front}>

               <GiEarthAsiaOceania className={styles.icon}/>

               <h3 className={styles.title}>WorldWide</h3>
               <button className={styles.subtitle}><FaPlaneDeparture className={styles.btn_icon}/> More Info</button>
           </div>

           <div className={styles.back}>
               <div className={styles.description}>
                 <p>Our Services are all over the world</p>
               </div>
           </div>
       </div>
   </motion.div>
            <motion.div className={styles.card}
              variants={boxvariants}
            >
       <div className={styles.content}>
           <div className={styles.front}>

               <GiForkKnifeSpoon className={styles.icon}/>

               <h3 className={styles.title}>Food & Drinks</h3>
               <button className={styles.subtitle}><FaPlaneDeparture className={styles.btn_icon}/> More Info</button>
           </div>

           <div className={styles.back}>
           <div className={styles.description}>
                <p>Delicious Food and Delicacies are provided</p>
               </div>
           </div>
       </div>
   </motion.div>
            <motion.div className={styles.card}
              variants={boxvariants}
            >
       <div className={styles.content}>
           <div className={styles.front}>

               <FaHotel className={styles.icon}/>

               <h3 className={styles.title}>Affordable Hotels</h3>
               <button className={styles.subtitle}><FaPlaneDeparture className={styles.btn_icon}/> More Info</button>
           </div>

           <div className={styles.back}>
           <div className={styles.description}>
                <p>Best Hotels at cheapest Rate</p>
               </div>
           </div>
       </div>
   </motion.div>
            <motion.div className={styles.card}
              variants={boxvariants}
            >
       <div className={styles.content}>
           <div className={styles.front}>

               <FaMoneyBillWaveAlt className={styles.icon}/>

               <h3 className={styles.title}>Affordable Prices</h3>
               <button className={styles.subtitle}><FaPlaneDeparture className={styles.btn_icon}/> More Info</button>
           </div>

           <div className={styles.back}>
           <div className={styles.description}>
                <p>Our Prices are pocket friendly</p>
               </div>
           </div>
       </div>
   </motion.div>
            <motion.div className={styles.card}
              variants={boxvariants}
            >
       <div className={styles.content}>
           <div className={styles.front}>

               <RiCustomerServiceFill className={styles.icon}/>

               <h3 className={styles.title}>24/7 Services</h3>
               
               <button className={styles.subtitle}><FaPlaneDeparture className={styles.btn_icon}/> More Info</button>
           </div>

           <div className={styles.back}>
           <div className={styles.description}>
                <p>Best and eveready 
                customer Service Team</p>
               </div>
           </div>
       </div>
   </motion.div>
            
                  
        </motion.div>
        </div>
    </section>
  )
}

export default Desc