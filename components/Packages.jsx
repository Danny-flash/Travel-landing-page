import styles from '../styles/Packages.module.css'
import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sdy from "../public/sdy.jpg"
import tower from "../public/tower.jpg"
import egypt from "../public/egypt.jpg"
import hawaii from "../public/hawaii.jpg"
import yellow from "../public/yellow.jpg"
import coloo from "../public/coloo.jpg"
import { ImLocation2 } from 'react-icons/im';
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

const Packages = () => {

     var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      arrows: false,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}

  return (
    <section className={styles.package} id="pricing">
        <p className={styles.gallery_header}>
                Our Packages
            </p>
            <p className={styles.gallery_subheader}>
                Choose your destination
            </p>

            <div className={styles.pc}>
            <div className={styles.slide_container}>
      <div className={styles.slide}>
        <Image src={hawaii} alt="highway"/>
        <motion.div className={styles.slide_body}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{once: false}}
        transition={{staggerChildren: 0.15}}
        variants={boxvariants}
        >
        <motion.div className={styles.flex}
        variants={boxvariants}
        ><ImLocation2 className={styles.icon}/> Hawaii</motion.div>
        <motion.p className={styles.desc}
        variants={boxvariants}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</motion.p>
        <motion.p className={styles.price}
        variants={boxvariants}
        >$190.00</motion.p>
        <button
        variants={boxvariants}
        >Book now</button>
      </motion.div>
      </div>
      <div className={styles.slide}>
      <Image src={tower} alt="highway"/>
      <motion.div className={styles.slide_body}
       initial={"hidden"}
       whileInView={"visible"}
       viewport={{once: false}}
       transition={{staggerChildren: 0.15}}
       variants={boxvariants}
      >
        <motion.div className={styles.flex} variants={boxvariants}><ImLocation2 className={styles.icon}/> Eiffel Tower</motion.div>
        <motion.p className={styles.desc} variants={boxvariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</motion.p>
        <motion.p className={styles.price} variants={boxvariants}>$220.00</motion.p>
        <button>Book now</button>
      </motion.div>
      </div>
      <div className={styles.slide}>
      <Image src={yellow} alt="highway"/>
      <motion.div className={styles.slide_body}
       initial={"hidden"}
       whileInView={"visible"}
       viewport={{once: false}}
       transition={{staggerChildren: 0.15}}
       variants={boxvariants}
      >
        <motion.div className={styles.flex} variants={boxvariants}><ImLocation2 className={styles.icon}/>Yellow Stone</motion.div>
        <motion.p className={styles.desc} variants={boxvariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</motion.p>
        <motion.p className={styles.price} variants={boxvariants}>150.00</motion.p>
        <button>Book now</button>
      </motion.div>
      </div >
      <div className={styles.slide}>
      <Image src={egypt} alt="highway"/>
      <motion.div className={styles.slide_body}
      initial={"hidden"}
        whileInView={"visible"}
        viewport={{once: false}}
        transition={{staggerChildren: 0.15}}
        variants={boxvariants}>
        <motion.div className={styles.flex} variants={boxvariants}><ImLocation2 className={styles.icon}/> Pyramid of Giza</motion.div>
        <motion.p className={styles.desc} variants={boxvariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</motion.p>
        <motion.p className={styles.price} variants={boxvariants}>$230.00</motion.p>
        <button>Book now</button>
      </motion.div>
      </div>
      <div className={styles.slide}>
      <Image src={sdy} alt="highway"/>
      <motion.div className={styles.slide_body}
       initial={"hidden"}
       whileInView={"visible"}
       viewport={{once: false}}
       transition={{staggerChildren: 0.15}}
       variants={boxvariants}
      >
        <motion.div className={styles.flex} variants={boxvariants}><ImLocation2 className={styles.icon}/> Sydney</motion.div>
        <motion.p className={styles.desc} variants={boxvariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</motion.p>
        <motion.p className={styles.price} variants={boxvariants}>$320.00</motion.p>
        <button>Book now</button>
      </motion.div>
      </div>
      <div className={styles.slide}>
      <Image src={coloo} alt="highway"/>
      <motion.div className={styles.slide_body}
       initial={"hidden"}
       whileInView={"visible"}
       viewport={{once: false}}
       transition={{staggerChildren: 0.15}}
       variants={boxvariants}
      >
        <motion.div className={styles.flex} variants={boxvariants}><ImLocation2 className={styles.icon}/> Colosseum</motion.div>
        <motion.p className={styles.desc} variants={boxvariants}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</motion.p>
        <motion.p className={styles.price} variants={boxvariants}>$280.00</motion.p>
        <button>Book now</button>
      </motion.div>
      </div>
     
    </div>
            </div>
            <div className={styles.mobile}>
            <Slider {...settings} className={styles.slide_container}>
      <div className={styles.slide} style={{margin: "0px 20px"}}>
        <Image src={hawaii} alt="highway"/>
        <div className={styles.slide_body}>
        <div className={styles.flex}><ImLocation2 className={styles.icon}/> Hawaii</div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</p>
        <p className={styles.price}>$190.00</p>
        <button>Book now</button>
      </div>
      </div>
      <div className={styles.slide}>
      <Image src={tower} alt="highway"/>
      <div className={styles.slide_body}>
        <div className={styles.flex}><ImLocation2 className={styles.icon}/> Eiffel Tower</div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</p>
        <p className={styles.price}>$220.00</p>
        <button>Book now</button>
      </div>
      </div>
      <div className={styles.slide}>
      <Image src={yellow} alt="highway"/>
      <div className={styles.slide_body}>
        <div className={styles.flex}><ImLocation2 className={styles.icon}/>Yellow Stone</div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</p>
        <p className={styles.price}>150.00</p>
        <button>Book now</button>
      </div>
      </div >
      <div className={styles.slide}>
      <Image src={egypt} alt="highway"/>
      <div className={styles.slide_body}>
        <div className={styles.flex}><ImLocation2 className={styles.icon}/> Pyramid of Giza</div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</p>
        <p className={styles.price}>$230.00</p>
        <button>Book now</button>
      </div>
      </div>
      <div className={styles.slide}>
      <Image src={sdy} alt="highway"/>
      <div className={styles.slide_body}>
        <div className={styles.flex}><ImLocation2 className={styles.icon}/> Sydney</div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</p>
        <p className={styles.price}>$320.00</p>
        <button>Book now</button>
      </div>
      </div>
      <div className={styles.slide}>
      <Image src={coloo} alt="highway"/>
      <div className={styles.slide_body}>
        <div className={styles.flex}><ImLocation2 className={styles.icon}/> Colosseum</div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus.</p>
        <p className={styles.price}>$280.00</p>
        <button>Book now</button>
      </div>
      </div>
     
    </Slider>
            </div>
    </section>
  )
}

export default Packages