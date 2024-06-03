import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import OpenModalButton from "../OpenModalButton";

function MenuButton() {

    // const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    const openMenu = (e) => {
        e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (ulRef.current && !ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const closeMenu = () => setShowMenu(false);

    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    // };

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = (e) => {
    //         if (ulRef.current && !ulRef.current.contains(e.target)) {
    //             setShowMenu(false);
    //         }
    //     };

    //     document.addEventListener("click", closeMenu);

    //     return () => document.removeEventListener("click", closeMenu);
    // }, [showMenu]);

    const ulClassName = "menu-dropdown" + (showMenu ? "" : " hidden");
    // const closeMenu = () => setShowMenu(false);

    return (
        <>
            <div className="menuButtonDiv">
                <button onClick={openMenu} className="menuButton">
                    <i className="fa-solid fa-bars"></i>
                    {/* menu */}
                </button>
                <ul className={ulClassName} ref={ulRef}>
                    <>
                        <div className="menuItems">

                            <NavLink
                                className="homeItem"
                                to="/"
                                onClick={() => setShowMenu(false)}
                            >
                                {/* <div className="about"> */}
                                <p>HOME</p>
                                {/* </div> */}
                            </NavLink>

                            <NavLink
                                to="/about"
                                className="aboutItem"
                                onClick={() => setShowMenu(false)}
                            >
                                <p>ABOUT</p>
                            </NavLink>

                            <NavLink
                                to="/services"
                                className="servicesItem"
                                onClick={() => setShowMenu(false)}
                            >
                                <p>SERVICES</p>
                            </NavLink>

                            <NavLink
                                to="/gallery"
                                className="galleryItem"
                                onClick={() => setShowMenu(false)}
                            >
                                <p>GALLERY</p>
                            </NavLink>

                            <NavLink
                                to="/testimonials"
                                className="testimonialsItem"
                                onClick={() => setShowMenu(false)}
                            >
                                <p>TESTIMONIALS</p>
                            </NavLink>

                            <NavLink
                                to="/contact-us"
                                className="contactItem"
                                onClick={() => setShowMenu(false)}
                            >
                                <p>CONTACT US</p>
                            </NavLink>

                        </div>
                    </>
                </ul>
            </div>
        </>
    );
}

export default MenuButton;
