import "./Services.css"

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Full Service Event Planning',
            description: ["Full service event planning is a comprehensive service that covers all aspects of planning and executing an event. This package includes:", "Initial consultation", "Venue selection", "Budget management", "Vendor coordination", "Event design and decor", "Logistics Management", "On-site coordination", "Post-event follow-up", " "],
            cost: "Package ranges from $5000-$10000",
            image: '../images/photos/wedding2.JPG'
        },
        {
            id: 2,
            name: 'Day of Coordination',
            description: ["Day of coordination, also known as event day coordination, is a service provided to ensure that all aspects of an event run smoothly on the actual day of the event. This service is typically offered to clients who have planned most of the event themselves but want professional assistance in executing their plans on the day of the event. Some key aspects of day of coordination include:", "Pre-event consulation (30-60 days prior to event date)", "Vendor coordination", "Timeline creation and management", "On-site management", "Coordination with venue staff", "Guest assistance", " "],
            cost: "Package ranges from $1500-$5000",
            image: ''
        },
        {
            id: 3,
            name: '\u00C0 La Carte Services',
            description: ["\u00C0 la carte event planning Services provide the flexibility to choose only the specific planning elements you need assistance with, allowing you to tailor our expertise to your unique requirements. This personalized approach ensures you receive professional support where you need it most, making your event planning process smoother and more enjoyable while maintaining your vision and control over the overall experience. Services offered:", "Photobooth rentals", "DJ services", "Live entertainment", "Rentals and Decor", "Balloon Garland and Decor", "Uplighting", "Cold sparklers", "Dancing on the Cloud", "Furniture rentals", " "]
        }
    ];

    const servicePageImages = [
        '../images/photos/IMG_3443.JPG',
        '../images/photos/wedding1.JPG',
        '../images/photos/wedding2.JPG',
        '../images/photos/IMG_3485.JPG',
        '../images/photos/IMG_3452.JPG'
    ]

    return (
        <div className="servicesBody">
            <p className="servicesIntro">services</p>
            <div className="photoCollage">
                {servicePageImages.map((src, index) => (
                    <div key={index} className="serviceImagesContainer">
                        <img src={src} alt={`services photo ${index + 1}`} className={`services${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="servicesListContainer">
                {services.map(service => (
                    <div key={service.id} className="serviceCard">
                        <div className="serviceHeading">
                            <div className="leftHeading">
                                <img src='images/mousa-events-fav.png' alt={service.name} />
                                <h2>{service.name}</h2>
                            </div>
                            <div className="rightHeading">
                                <h2>{service.cost}</h2>
                            </div>
                        </div>
                        <div className="serviceDetails">
                            {service.description.map((paragraph, idx) => (
                                <li key={idx} className={idx !== 0 ? 'indented' : ''}>{paragraph}</li>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

        </div>

    );
}

export default Services;
