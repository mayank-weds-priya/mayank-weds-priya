const events = [
    // {
    //     title: "Wedding",
    //     icon: "💍",
    //     date: "Wednesday, November 25, 2026",
    //     time: "7:00 PM",
    //     venue: "Classic lawn, Moti Nagar Unnao",
    //     mapUrl: "https://www.google.com/maps/place/Classic+Lawan/@26.5512146,80.4942379,17z/data=!3m1!4b1!4m6!3m5!1s0x399c15caf486950b:0x546f7cb05e70685b!8m2!3d26.5512146!4d80.4968128!16s%2Fg%2F11fyls8sqw?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
    // },
    {
        title: "Reception",
        icon: "🎉",
        date: "Friday, November 27, 2026",
        time: "7:00 PM",
        venue: "Gokul Lawn, P D Nagar Unnao",
        mapUrl: "https://www.google.com/maps/place/Gokul+Lawn+St,+Deeh,+Unnao,+Uttar+Pradesh+209801/@26.5186921,80.4821366,17z/data=!3m1!4b1!4m6!3m5!1s0x399c150e95f97373:0x4b6361b2e23078c9!8m2!3d26.5186921!4d80.4847115!16s%2Fg%2F11rx3wjr4n?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
    }
];

function WeddingEvents() {
    return (
        <section className="invitation-section events-section">
            <div className="section-container">

                <div className="section-header">
                    <span className="section-eyebrow">
                        THE FESTIVITIES
                    </span>

                    <h2>WEDDING EVENTS</h2>

                    <p>
                        We invite you to join us and make these
                        moments even more memorable.
                    </p>
                </div>

                <div className="events-grid">

                    {events.map((event, index) => (
                        <div
                            className="event-invitation-card"
                            key={index}
                        >
                            <div className="event-card-top">
                                <h3>
                                    {event.title}
                                </h3>

                                <span>
                                    {event.icon}
                                </span>
                            </div>

                            <div className="event-detail">
                                <label>DATE</label>

                                <p>
                                    {event.date}
                                </p>
                            </div>

                            <div className="event-detail">
                                <label>TIME</label>

                                <p>
                                    {event.time}
                                </p>
                            </div>

                            <div className="event-detail">
                                <label>VENUE</label>

                                <p>
                                    {event.venue}
                                </p>
                            </div>

                            <a
                                href={event.mapUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="outline-btn"
                            >
                                VIEW ON GOOGLE MAPS
                            </a>

                        </div>
                    ))}

                </div>

                <div className="ornamental-divider">
                    <span></span>
                    <i>✦</i>
                    <span></span>
                </div>

            </div>
        </section>
    );
}

export default WeddingEvents;