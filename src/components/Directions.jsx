function Directions({ type }) {

    console.log(type);
    const mapUrl =

        type == "WR" ?
            "https://www.google.com/maps/place/Classic+Lawan/@26.5512146,80.4942379,17z/data=!3m1!4b1!4m6!3m5!1s0x399c15caf486950b:0x546f7cb05e70685b!8m2!3d26.5512146!4d80.4968128!16s%2Fg%2F11fyls8sqw?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D" :
            "https://www.google.com/maps/place/Gokul+Lawn+St,+Deeh,+Unnao,+Uttar+Pradesh+209801/@26.5186921,80.4821366,17z/data=!3m1!4b1!4m6!3m5!1s0x399c150e95f97373:0x4b6361b2e23078c9!8m2!3d26.5186921!4d80.4847115!16s%2Fg%2F11rx3wjr4n?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";


    return (
        <section className="invitation-section directions-section">
            <div className="section-container">

                <div className="section-header">
                    <span className="section-eyebrow">
                        DIRECTIONS
                    </span>

                    <h2>THE VENUE</h2>

                    <p>
                        We look forward to welcoming you.
                    </p>
                </div>


                <div className="map-card">

                    <img
                        src="/images/map-placeholder.svg"
                        alt="Wedding venue location"
                    />

                    <div className="map-overlay">
                        {/* <span className="location-pin">
                            📍
                        </span> */}


                        {
                            type == "WR" ?
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.032787197883!2d80.49423787521125!3d26.55121457686441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c15caf486950b%3A0x546f7cb05e70685b!2sClassic%20Lawan!5e0!3m2!1sen!2sin!4v1787592679990!5m2!1sen!2sin" width="600" height="450" style={{ border: "0", height: "300px", maxWidth: "600px" }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                                :
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.0445355787465!2d80.48471150000002!3d26.5186921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c150e95f97373%3A0x4b6361b2e23078c9!2sGokul%20Lawn%20St%2C%20Deeh%2C%20Unnao%2C%20Uttar%20Pradesh%20209801!5e0!3m2!1sen!2sin!4v1788188076894!5m2!1sen!2sin" width="600" height="450" style={{ border: "0", height: "300px", maxWidth: "600px" }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        }
                    </div>

                </div>

                <div className="direction-actions">

                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="outline-btn"
                    >
                        NAVIGATE
                    </a>

                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="outline-btn"
                    >
                        OPEN GOOGLE MAPS
                    </a>

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

export default Directions;