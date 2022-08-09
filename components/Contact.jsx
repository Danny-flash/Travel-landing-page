import styles from '../styles/Contact.module.css'
import {motion} from "framer-motion"
import Image from "next/image"
import contact from "../public/highway.png"

const Contact = () => {
  return (
    <section className={styles.contact}>
         <p className={styles.gallery_header}>
                Contact Us
            </p>           


            <div className={styles.contact_cont}>
            <div className={styles.highway}>
        <Image src={contact} alt="contact-image"/>
        </div>
        <div className={styles.form}>
           <div className={styles.sub_form}>
             <div className={styles.flex}>
             <input type="text" placeholder='Name'/>
              <input type="email" placeholder='Email..' />
             </div>
             <div className={styles.flex}>
             <input type="text" placeholder='Subject' />
              <input type="number" placeholder='Number'/>
             </div>
           
             <input type="text" placeholder='Message' className={styles.stu}/>
           <button>Send Message</button>
           </div>
        </div>
            </div>
    </section>
  )
}

export default Contact