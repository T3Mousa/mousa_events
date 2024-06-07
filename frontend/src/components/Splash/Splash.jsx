import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Splash.css'

const Splash = () => {
    const homePageImages = [
        '../images/photos/NammourPhotos/AI2A2671.jpg',
        '../images/photos/NammourPhotos/WHP01308.jpg',
        '../images/photos/NammourPhotos/AI2A2696.jpg',
        '../images/photos/ChelseaAndRossPhotos/firstlookformals/ChelseaandRossWedding-101.jpg',
        '../images/photos/ChelseaAndRossPhotos/reception/ChelseaandRossWedding-652.jpg',
        '../images/photos/ChelseaAndRossPhotos/gettingreadydetails/ChelseaandRossWedding-4.jpg',
        '../images/photos/CarolynAndGeorge/portraits/SCP42.jpg',
        '../images/photos/CarolynAndGeorge/gettingreadyvenuedetails/carolynandgeorge-23.jpg',
        '../images/photos/CarolynAndGeorge/reception/SCP53.jpg'
    ];

    const [currentSetIndex, setCurrentSetIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSetIndex((prevIndex) => (prevIndex + 1) % Math.ceil(homePageImages.length / 3));
        }, 5000); // Change image set every 3 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [homePageImages.length]);

    const currentImages = homePageImages.slice(currentSetIndex * 3, currentSetIndex * 3 + 3);

    return (
        <div className='homeBody'>
            <div className='homeIntro'>
                <div className='opening'>
                    where creativity and precision come together seamlessly
                </div>


                <div className="imageCollage">
                    {currentImages.map((src, index) => (
                        <div key={index} className="imageContainer">
                            <img src={src} alt={`weddings ${index + 1}`} className={`weddings${index + 1}`} />
                        </div>
                    ))}
                </div>


                <p>From corporate gatherings to lavish weddings and milestone celebrations, we pride ourselves on delivering exceptional events tailored to your specific needs. Let us take the stress out of planning so you can savor every moment of your special day!</p>
            </div >
            <div className='homeClosing'>
                <div className='closingImage'>
                    <img src="../images/about/Headshots/IMG_7050.jpg" alt="blue headshot" />
                </div>
                <div className='closingRemarks'>
                    <p>
                        At Mousa Events, we offer comprehensive event planning services for various occasions, including weddings, graduations, birthday parties, bridal showers, and more. Every event, regardless of size, is significant to us, and we are dedicated to making each one memorable. Visit our <Link className='servicesPageLink' to="/services">services</Link> page for a detailed list of what we can offer for your special event.
                    </p>
                </div>
            </div>
            <div className='closingWeddingImage'>
                <img src="../images/photos/NammourPhotos/WHP01255.jpg" alt="closing wedding image" />

            </div>
        </div>

    );
}

export default Splash;
