import { useEffect, useState } from "react";

function WeddingCard() {
    const targetDate = new Date(
        "2026-11-25T19:00:00"
    );

    const calculateTime = () => {
        const now = new Date();

        const difference =
            targetDate.getTime() -
            now.getTime();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return {
            days: Math.floor(
                difference / (1000 * 60 * 60 * 24)
            ),

            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),

            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),

            seconds: Math.floor(
                (difference / 1000) % 60
            )
        };
    };

    const [timeLeft, setTimeLeft] =
        useState(calculateTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero-invitation-section">

            <div className="wedding-card">

                <div className="card-monogram">
                    <img src="/images/monogram.png" alt="Mayank weds Priya" width="200px"/>
                </div>

                <p className="small-title">
                    TOGETHER IN LOVE
                </p>

                <h1 className="groom-name">
                    Mayank Raghuvanshi
                </h1>

                <div className="and-symbol">
                    &
                </div>

                <h1 className="bride-name">
                    Priya Singh
                </h1>

                {/* <p className="wedding-date">
                    Wednesday • November 25, 2026
                </p> */}

                <div className="gold-line"></div>

                <p className="card-message">
                    With love and the blessings of our families,
                    we joyfully invite you to celebrate the
                    beginning of our forever.
                </p>

                <h3 className="date-display">
                    NOVEMBER 25, 2026
                </h3>

                <div className="countdown-container">

                    <div className="time-box">
                        <strong>
                            {timeLeft.days}
                        </strong>
                        <span>DAYS</span>
                    </div>

                    <div className="time-box">
                        <strong>
                            {timeLeft.hours}
                        </strong>
                        <span>HRS</span>
                    </div>

                    <div className="time-box">
                        <strong>
                            {timeLeft.minutes}
                        </strong>
                        <span>MIN</span>
                    </div>

                    <div className="time-box">
                        <strong>
                            {timeLeft.seconds}
                        </strong>
                        <span>SEC</span>
                    </div>

                </div>

            </div>

            <div className="scroll-indicator">
                BEGIN JOURNEY

                <span>↓</span>
            </div>

        </section>
    );
}

export default WeddingCard;