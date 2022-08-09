import styles from '../styles/Reviews.module.css'
import Image from "next/image"
import bungee from "../public/bungee.jpg"
import wind from "../public/wind.jpg"
import sky from "../public/sky.jpg"
import kayak from "../public/kayak.jpg"



const Reviews = () => {
  return (
    <section className={styles.reviews}>
       <p className={styles.gallery_header}>
                Reviews
            </p>
            <p className={styles.gallery_subheader}>
                We Record Memories
            </p>
            <div className={styles.reviews_container}>
            <div className={styles.adv_section}>
         <div className={styles.card}>
           <Image src={bungee} width={100} height={100} alt="highway"/>
            <p className={styles.desc}>Bungee Jump</p>
            <p className={styles.subdesc}>Jump from a great height while connected to a large elastic cord</p>
            <button>Read More</button>
         </div>
         <div className={styles.card}>
           <Image src={wind} width={100} height={100} alt="highway"/>
            <p className={styles.desc}>Windsurfing</p>
            <p className={styles.subdesc}>wind propelled water sport, combination of sailing and surfing</p>
            <button>Read More</button>
         </div>
         <div className={styles.card}>
           <Image src={kayak} width={100} height={100} alt="highway"/>
            <p className={styles.desc}>Kayaking</p>
            <p className={styles.subdesc}>The use of a small narrow watercraft over moving waters</p>
            <button>Read More</button>
         </div>
         <div className={styles.card}>
           <Image src={sky} width={100} height={100} alt="highway"/>
            <p className={styles.desc}>Sky Diving</p>
            <p className={styles.subdesc}>Jump from a high point in the atmosphere to the surface of..</p>
            <button>Read More</button>
         </div>
      </div>
            </div>
    </section>
  )
}

export default Reviews