import { useState } from "react"
import styles from "../../styles/Footer.module.css"
import { FaCamera } from "react-icons/fa"
import Link from "next/link"
import { ImTwitter, ImFacebook, ImDribbble } from "react-icons/im"

const Footer = () => {
        const [ active, setActive ] = useState(true);

  return (
    <div className={`${styles.footer} mt-11 bg-slate-800`}>
        <div className={`${styles.footer_height} flex flex-col md:flex-row justify-between md:justify-around items-center`}>
            <div className={`${styles.left_footer} grid grid-cols-1 gap-y-6 justify-between mb-8 md:mb-0`}>
                <div className="footer_title flex items-center cursor-pointer">
                    <FaCamera className="text-5xl text-white" />
                    <h2 className="header-title ml-2 text-xl text-white font-semibold tracking-widest"> Raazy <br/> <span className="text-gray-400 tracking-tight">photography</span> 
                    </h2>
                </div>
                <div className="footer_desc text-gray-400">
                    <p> Men cannot live without exchanging <br />
                        articles, but producing them they <br />
                        live by work not trade
                    </p>
                </div>
            </div>
            <div className={`${styles.center_footer} grid grid-cols-3 gap-x-10`}>
                <div className={`${styles.centerFooter_left} grid grid-rows-5 gap-3`}>
                    <Link href="#" className={`${active ? styles.active : styles.notActive}`}> About Us </Link>
                    <Link href="#"> Our Story </Link>
                    <Link href="#"> Team Members </Link>
                    <Link href="#"> Careers </Link>
                    <Link href="#"> Contact Us </Link>
                </div>
                <div className="centerFooter_center grid grid-rows-5 gap-3">
                    <Link href="#" className="font-bold text-white"> Quick Links </Link>
                    <Link href="#"> Term Of Use </Link>
                    <Link href="#"> Privacy Policy </Link>
                    <Link href="#"> Contact Support </Link>
                    <Link href="#"> Faq's </Link>
                </div>
                <div className="centerFooter_right grid grid-rows-5 gap-3">
                    <Link href="#" className="font-bold text-white"> Support </Link>
                    <Link href="#"> Help Center </Link>
                    <Link href="#"> Profile </Link>
                    <Link href="#"> Management </Link>
                    <Link href="#"> Privacy Policy </Link>
                </div>
            </div>
            <div className={`${styles.right_footer} grid grid-cols-1 gap-6 mt-8 md:mt-0 items-center`}>
                <h2 className="text-white font-semibold"> Get In Touch </h2>
                <p className="text-white"> Men Cannot live by <br /> 
                exchanging articles, but
                </p>
                <div className="social_media grid grid-cols-3 gap-3 mt-8 md:mt-8">
                    <ImTwitter className="text-3xl font-bold text-white cursor-pointer" />
                    <ImFacebook className="text-3xl font-bold text-white cursor-pointer"/>
                    <ImDribbble className="text-3xl font-bold text-white cursor-pointer"/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Footer