import { useState } from "react";
import "./Gallery.css"

const galleryPhotos = [
    { url: '../images/photos/CarolynAndGeorge/portraits/carolynandgeorge-341.jpg', title: 'Carolyn & George Wedding 9' },
    { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge-319.jpg', title: 'Carolyn & George Wedding 12' },
    { url: '../images/photos/ChelseaAndRossPhotos/firstlookformals/ChelseaandRossWedding-98.jpg', title: 'Chelsea & Ross Wedding 2' },
    { url: '../images/photos/CarolynAndGeorge/gettingreadyvenuedetails/carolynandgeorge-5.jpg', title: 'Carolyn & George Wedding 6' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01517.jpeg', title: 'Grad Party' },
    { url: '../images/photos/ChelseaAndRossPhotos/bridalparty/ChelseaandRossWedding-581.jpg', title: 'Chelsea & Ross Wedding 1' },
    { url: '../images/photos/NammourPhotos/AI2A2660.jpg', title: 'Nammour1' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01572.jpeg', title: 'Grad Party' },
    { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-245.jpg', title: 'Carolyn & George Wedding 3' },
    { url: '../images/photos/NammourPhotos/WHP01751.jpg', title: 'Nammour9' },
    { url: '../images/photos/CarolynAndGeorge/ceremony/SCP13.jpg', title: 'Carolyn & George Wedding 18' },
    { url: '../images/photos/GrebeGraduationPhotos/florida/DSC00729.jpeg', title: 'Grad Party' },
    { url: '../images/photos/NammourPhotos/WHP01282.jpg', title: 'Nammour6' },
    { url: '../images/photos/ChelseaAndRossPhotos/firstlookformals/ChelseaandRossWedding-119.jpg', title: 'Chelsea & Ross Wedding 3' },
    { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge-65.jpg', title: 'Carolyn & George Wedding 13' },
    { url: '../images/photos/ChelseaAndRossPhotos/firstlookformals/ChelseaandRossWedding-600.jpg', title: 'Chelsea & Ross Wedding 5' },
    { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-279.jpg', title: 'Carolyn & George Wedding 5' },
    { url: '../images/photos/ChelseaAndRossPhotos/ceremony/ChelseaandRossWedding-407.jpg', title: 'Chelsea & Ross Wedding 7' },
    { url: '../images/photos/NammourPhotos/WHP01994.jpg', title: 'Nammour12' },
    { url: '../images/photos/ChelseaAndRossPhotos/gettingreadydetails/ChelseaandRossWedding-14.jpg', title: 'Chelsea & Ross Wedding 13' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01535.jpeg', title: 'Grad Party' },
    { url: '../images/photos/NammourPhotos/WHP02113.jpg', title: 'Nammour13' },
    { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorgewedding-51.jpg', title: 'Carolyn & George Wedding 17' },
    { url: '../images/photos/NammourPhotos/WHP09983.jpg', title: 'Nammour14' },
    { url: '../images/photos/NammourPhotos/WHP01459.jpg', title: 'Nammour7' },
    { url: '../images/photos/ChelseaAndRossPhotos/gettingreadydetails/ChelseaandRossWedding-70.jpg', title: 'Chelsea & Ross Wedding 10' },
    { url: '../images/photos/NammourPhotos/IZ4A0445.jpg', title: 'Nammour3' },
    { url: '../images/photos/CarolynAndGeorge/portraits/carolynandgeorge-363.jpg', title: 'Carolyn & George Wedding 10' },
    { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorgewedding-63.jpg', title: 'Carolyn & George Wedding 11' },
    { url: '../images/photos/NammourPhotos/WHP00889.jpg', title: 'Nammour4' },
    { url: '../images/photos/ChelseaAndRossPhotos/bridalparty/ChelseaandRossWedding-222.jpg', title: 'Chelsea Ross Wedding' },
    { url: '../images/photos/GrebeGraduationPhotos/florida/DSC05636copy.jpg', title: 'Grad Party' },
    { url: '../images/photos/NammourPhotos/WHP09927.jpg', title: 'Nammour10' },
    { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-187.jpg', title: 'Carolyn & George Wedding 1' },
    { url: '../images/photos/ChelseaAndRossPhotos/bridalparty/ChelseaandRossWedding-84.jpg', title: 'Chealsea Ross Wedding' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01491.jpeg', title: 'Grad Party' },
    { url: '../images/photos/ChelseaAndRossPhotos/gettingreadydetails/ChelseaandRossWedding-58.jpg', title: 'Chelsea & Ross Wedding 9' },
    { url: '../images/photos/NammourPhotos/WHP09918.jpg', title: 'Nammour17' },
    { url: '../images/photos/ChelseaAndRossPhotos/ceremony/ChelseaandRossWedding-404.jpg', title: 'Chelsea & Ross Wedding 6' },
    { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorge-163.jpg', title: 'Carolyn & George Wedding 16' },
    { url: '../images/photos/NammourPhotos/WHP01366.jpg', title: 'Nammour19' },
    { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-250.jpg', title: 'Carolyn & George Wedding 4' },
    { url: '../images/photos/Venue Tent Photos/WHP08530.jpg', title: 'Grad Party' },
    { url: '../images/photos/ChelseaAndRossPhotos/bridalparty/ChelseaandRossWedding-588.jpg', title: 'Chelsea & Ross Wedding 11' },
    { url: '../images/photos/GrebeGraduationPhotos/florida/DSC03198copy.jpg', title: 'Grad Party' },
    { url: '../images/photos/CarolynAndGeorge/gettingreadyvenuedetails/carolynandgeorge-8.jpg', title: 'Carolyn & George Wedding 7' },
    { url: '../images/photos/CarolynAndGeorge/reception/DSC07481copy.jpg', title: 'Carolyn & George Wedding 14' },
    { url: '../images/photos/NammourPhotos/AI2A2809.jpg', title: 'Nammour2' },

    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01503.jpeg', title: 'Grad Party' },
    { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorge-52.jpg', title: 'Carolyn & George Wedding 15' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01508.jpeg', title: 'Grad Party' },
    { url: '../images/photos/ChelseaAndRossPhotos/ceremony/ChelseaandRossWedding-519.jpg', title: 'Chelsea & Ross Wedding 12' },
    { url: '../images/photos/NammourPhotos/WHP01860.jpg', title: 'Nammour21' },
    { url: '../images/photos/GrebeGraduationPhotos/florida/DSC03629.jpeg', title: 'Grad Party' },
    { url: '/images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-583.jpg', title: 'Chelsea Ross Wedding' },
    { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-243.jpg', title: 'C G Wedding' },
    { url: '../images/photos/NammourPhotos/WHP01403.jpg', title: 'Nammour20' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-617.jpg', title: 'Chelsea Ross Wedding' },
    { url: '../images/photos/GrebeGraduationPhotos/florida/DSC04309.jpeg', title: 'Grad Party' },
    { url: '../images/photos/NammourPhotos/WHP09930.jpg', title: 'Nammour22' },
    { url: '../images/photos/ChelseaAndRossPhotos/firstlookformals/ChelseaandRossWedding-600.jpg', title: 'Chelsea & Ross Wedding 5' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01512.jpeg', title: 'Grad Party' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-594.jpg', title: 'Chelsea Ross Wedding' },
    { url: '../images/photos/NammourPhotos/WHP01204.jpg', title: 'Nammour5' },
    { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorge-41.jpg', title: 'C G Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/ceremony/ChelseaandRossWedding-343.jpg', title: 'C R Wedding' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC02036.jpeg', title: 'Grad Party' },
    { url: '../images/photos/ChelseaAndRossPhotos/firstlookformals/ChelseaandRossWedding5000.jpg', title: 'C R Wedding' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01611.jpeg', title: 'Grad Party' },
    { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge-7.jpg', title: 'C G Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/ceremony/ChelseaandRossWedding-367.jpg', title: 'C R Wedding' },
    { url: '../images/photos/NammourPhotos/WHP01270.jpg', title: 'Nammour25' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-622.jpg', title: 'Chelsea Ross Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-820.jpg', title: 'Chealsea Ross Wedding' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01538.jpeg', title: 'Grad Party' },
    { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-234.jpg', title: 'Carolyn & George Wedding 2' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01536.jpeg', title: 'Grad Party' },
    { url: '../images/photos/CarolynAndGeorge/portraits/SCP5.jpg', title: 'C G Wedding' },
    { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge-209.jpg', title: 'C G Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/ceremony/ChelseaandRossWedding-228.jpg', title: 'C R Wedding' },
    { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge-200.jpg', title: 'C G Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-612.jpg', title: 'C R Wedding' },
    { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorge-146.jpg', title: 'C G Wedding' },
    { url: '../images/photos/NammourPhotos/WHP01047.jpg', title: 'Nammour26' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-621.jpg', title: 'Chelsea Ross Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-956.jpg', title: 'Chelsea Ross Wedding' },
    { url: '../images/photos/GrebeGraduationPhotos/decor/DSC01564.jpeg', title: 'Grad Party' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-628.jpg', title: 'Chelsea Ross Wedding' },
    { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorge-158.jpg', title: 'C G Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-436.jpg', title: 'C R Wedding' },
    { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge.jpg', title: 'C G Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/gettingreadydetails/ChelseaandRossWedding-19.jpg', title: 'C R Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-570.jpg', title: 'C R Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/bridalparty/ChelseaandRossWedding-400.jpg', title: 'C R Wedding' },
    { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge-58.jpg', title: 'C G Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/firstlookformals/ChelseaandRossWedding-284.jpg', title: 'C R Wedding' },
    { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-189.jpg', title: 'Carolyn Gearoge Wedding' },
    { url: '../images/photos/ChelseaAndRossPhotos/firstlookformals/ChelseaandRossWedding-179.jpg', title: 'Chelsea & Ross Wedding 4' },
    { url: '../images/photos/NammourPhotos/WHP01501.jpg', title: 'Nammour8' },
    { url: '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-427.jpg', title: 'Chelsea Ross Wedding' }
];

const Gallery = () => {
    const [expandedImage, setExpandedImage] = useState(null);

    const handleImageClick = (src) => {
        setExpandedImage(src);
    };

    const handleOverlayClick = () => {
        setExpandedImage(null);
    };

    return (
        <div className="galleryBody">
            <p className="galleryIntro">photo gallery</p>
            <div className="galleryContainer">
                {galleryPhotos.map((photo, index) => (
                    // <div key={index} className="photo">
                    <img
                        key={index}
                        src={photo.url}
                        alt={photo.title}
                        className="photo"
                        onClick={() => handleImageClick(photo.url)}
                    />
                    // </div>
                ))}

                {expandedImage && (
                    <div className="overlay" onClick={handleOverlayClick}>
                        <img src={expandedImage} alt="Expanded" className="expandedImage" />
                    </div>
                )}
            </div>
        </div>

    );
}

export default Gallery;
