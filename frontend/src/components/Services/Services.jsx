import "./Services.css"

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Event Planning',
            description: 'We offer full-service event planning for weddings, birthdays, corporate events, and more. Our experienced planners will work with you to create the perfect event tailored to your needs and budget.',
            image: 'event-planning.jpg'
        },
        {
            id: 2,
            name: 'Decorations',
            description: "Transform your venue with our stunning decorations. From floral arrangements to table settings, we'll help you create an ambiance that matches your theme and vision.",
            image: 'decorations.jpg'
        },
        {
            id: 3,
            name: 'Entertainment',
            description: "Keep your guests entertained with our selection of entertainment options. Whether it's live music, DJs, or performers, we'll help you find the perfect entertainment for your event.",
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
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>

    );
}

export default Services;
