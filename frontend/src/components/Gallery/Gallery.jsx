import "./Gallery.css"

const Gallery = () => {
    const galleryPhotos = [
        { url: '../images/photos/CarolynAndGeorge/portraits/carolynandgeorge-341.jpg', title: 'Carolyn & George Wedding 9' },
        { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge-319.jpg', title: 'Carolyn & George Wedding 12' },
        { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-234.jpg', title: 'Carolyn & George Wedding 2' },
        { url: '../images/photos/CarolynAndGeorge/gettingreadyvenuedetails/carolynandgeorge-5.jpg', title: 'Carolyn & George Wedding 6' },
        { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-187.jpg', title: 'Carolyn & George Wedding 1' },
        { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-245.jpg', title: 'Carolyn & George Wedding 3' },
        { url: '../images/photos/CarolynAndGeorge/ceremony/SCP13.jpg', title: 'Carolyn & George Wedding 18' },
        { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-250.jpg', title: 'Carolyn & George Wedding 4' },
        { url: '../images/photos/CarolynAndGeorge/ceremony/carolynandgeorge-279.jpg', title: 'Carolyn & George Wedding 5' },
        { url: '../images/photos/CarolynAndGeorge/gettingreadyvenuedetails/carolynandgeorge-8.jpg', title: 'Carolyn & George Wedding 7' },
        { url: '../images/photos/CarolynAndGeorge/reception/DSC07481copy.jpg', title: 'Carolyn & George Wedding 14' },
        { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorgewedding-51.jpg', title: 'Carolyn & George Wedding 17' },
        { url: '../images/photos/CarolynAndGeorge/portraits/carolynandgeorge-363.jpg', title: 'Carolyn & George Wedding 10' },
        { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorge-65.jpg', title: 'Carolyn & George Wedding 13' },
        { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorge-52.jpg', title: 'Carolyn & George Wedding 15' },
        { url: '../images/photos/CarolynAndGeorge/bridalparty/carolynandgeorge-163.jpg', title: 'Carolyn & George Wedding 16' },
        { url: '../images/photos/CarolynAndGeorge/reception/carolynandgeorgewedding-63.jpg', title: 'Carolyn & George Wedding 11' },

    ];

    return (
        <div className="galleryBody">
            <p className="galleryIntro">photo gallery</p>
            <div className="galleryContainer">
                {galleryPhotos.map((photo, index) => (
                    <div key={index} className="photo">
                        <img src={photo.url} alt={photo.title} />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Gallery;
