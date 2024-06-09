import { useEffect, useState } from "react";
import "./Footer.css"

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleImageClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer ${isVisible ? 'visible' : ''}`}>
            <div className="footerCenter">
                <div className="footerConnect">
                    <div className="logo">
                        <img src="../images/mousa-events-mini-logo.png" alt="mousa events logo" onClick={handleImageClick} />
                    </div>
                    <div className="socialLinks">
                        <p className="connectPara">Connect With Us</p>
                        <div className="socials">
                            <a href="https://www.facebook.com/MousaEvents/" target="_blank"> <i className="fa-brands fa-facebook-f"></i> </a>
                            <a href="https://www.instagram.com/mousaevents/" target="_blank"> <i className="fa-brands fa-instagram"></i> </a>
                            <div className="footerContact">
                                <p className="footerEmail">Email: <a href="mailto:mousaevents@gmail.com">mousaevents@gmail.com</a></p>
                                <p className="footerPhone">Phone: <a href="tel:9045251648">904.525.1648</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="weddingBadge">
                        <img src="../images/photos/BestWeddingPro_Top3_24 (1).png" alt="BestWeddingPro Badge" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
