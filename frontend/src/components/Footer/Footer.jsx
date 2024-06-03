
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerCenter">
                <div className="logo">
                    <img src="../images/mousa-events-mini-logo.png" alt="mousa events logo" />
                </div>
                {/* <div className="connectWithUs"> */}
                <p className="connectPara">Connect With Us: </p>
                <div className="socialLinks">
                    <a href="https://www.facebook.com/MousaEvents/" target="_blank"> <i className="fa-brands fa-facebook-f"></i> </a>
                    <a href="https://www.instagram.com/mousaevents/" target="_blank"> <i className="fa-brands fa-instagram"></i> </a>
                </div>

                {/* </div> */}
            </div>
        </footer>
    )
}

export default Footer;
