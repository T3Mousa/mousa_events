import "./Services.css"

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Full Service Wedding Planning',
            description: ["For couples who desire comprehensive support throughout the entire wedding planning process, our full-service wedding planning package is the ideal choice. From the moment you engage our services up to 12 months prior to your wedding day, our dedicated team will be there to guide you through every step. We assist with venue selection, vendor sourcing, budget management, design and décor, guest coordination, and all other aspects of wedding planning. Our goal is to transform your vision into a reality, ensuring that every detail is perfectly executed, and you can relax and enjoy the journey to your dream wedding."],
            image: '../images/photos/wedding2.JPG'
        },
        {
            id: 2,
            name: 'Day of Coordination',
            description: ["At Mousa Events, we understand that even the most organized couples can benefit from an extra set of hands to ensure a seamless wedding day. With services beginning up to 30 days prior to your event, our day of coordination package is specifically designed for couples who have completed the majority of their wedding planning but need assistance with finalizing details and managing the logistics. With our expertise and attention to detail, we take care of the loose ends, allowing you to relax and fully enjoy your special day. This package includes:",
                "Rehearsal day & Wedding day responsibilities", "Development & Excecution of the wedding day timeline", "Confirmation & oversight of all contracted vendors"],
            image: ''
        },
        {
            id: 11,
            name: 'Event Planning',
            description: ['We offer full-service event planning for weddings, birthdays, corporate events, and more. Our experienced planners will work with you to create the perfect event tailored to your needs and budget.'],
            image: 'event-planning.jpg'
        },
        {
            id: 12,
            name: 'Decorations',
            description: ["Transform your venue with our stunning decorations. From floral arrangements to table settings, we'll help you create an ambiance that matches your theme and vision."],
            image: 'decorations.jpg'
        },
        {
            id: 13,
            name: 'Entertainment',
            description: ["Keep your guests entertained with our selection of entertainment options. Whether it's live music, DJs, or performers, we'll help you find the perfect entertainment for your event."],
            image: 'entertainment.jpg'
        },
    ];

    return (
        <div className="servicesBody">
            <p className="servicesIntro">services</p>
            <div className="servicesListContainer">
                {services.map(service => (
                    <div key={service.id} className="serviceCard">
                        <div className="serviceHeading">
                            <img src='images/mousa-events-fav.png' alt={service.name} />
                            <h3>{service.name}</h3>
                        </div>
                        <div className="serviceDetails">
                            {service.description.map((paragraph, idx) => (
                                <p key={idx} className={idx !== 0 ? 'indented' : ''}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

        </div>

    );
}

export default Services;
