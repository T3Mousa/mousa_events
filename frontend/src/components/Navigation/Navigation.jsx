import { NavLink } from "react-router-dom";
import MenuButton from "./MenuButton";
import "./Navigation.css";

function Navigation() {

    return (
        <>
            <div className="header">
                <div className="navBar">
                    <div className="homeButton">
                        <NavLink className="homeButton" to="/">
                            <img src="../images/mousa-events-mini-logo.png" alt="mousa events logo" />
                            <p>mousa events</p>
                        </NavLink>
                    </div>
                    <div className="menuBar">
                        <NavLink to="/" className="home">HOME</NavLink>
                        <NavLink to="/about" className="about">ABOUT</NavLink>
                        <NavLink to="/services" className="services">SERVICES</NavLink>
                        <NavLink to="/gallery" className="gallery">GALLERY</NavLink>
                        <NavLink to="/testimonials" className="testimonials">TESTIMONIALS</NavLink>
                        <NavLink to="/contact-us" className="contact">CONTACT</NavLink>
                    </div>
                    {/* <div className="menuButton">
                        <i className="fa-solid fa-bars"></i>
                    </div> */}

                </div>
                {/* <div className="leftNavBar"> */}
                <MenuButton />
                {/* </div > */}
            </div>



        </>
    );
}

export default Navigation;
