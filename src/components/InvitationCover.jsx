function InvitationCover({ isOpening, onOpen }) {
    return (
        <div
            className={`invitation-cover ${isOpening ? "opening" : ""
                }`}
        >
            {/* Left Curtain */}
            <div className="curtain curtain-left"></div>

            {/* Right Curtain */}
            <div className="curtain curtain-right"></div>

            {/* Content shown before opening */}
            <div
                className={`cover-content ${isOpening ? "fade-out" : ""
                    }`}
            >
                <div className="monogram-wrapper">

                    <div className="floral-decoration floral-left">
                        ❧
                    </div>

                    <div className="monogram">
                        <img src="/images/monogram.png" alt="Mayank weds Priya" width="200px" />
                    </div>

                    <div className="floral-decoration floral-right">
                        ❧
                    </div>

                </div>

                <p className="together-text">
                    TOGETHER FOREVER
                </p>

                <h1>
                    With love and the blessing of our families
                </h1>

                <p className="invitation-message">
                    "We joyfully invite you to celebrate the beginning
                    of our forever!"
                </p>

                <button
                    type="button"
                    className="open-invitation-btn"
                    onClick={onOpen}
                    disabled={isOpening}
                >
                    OPEN INVITATION
                </button>
            </div>

            {/* Candles */}
            <div className="candle candle-left">
                <span className="flame"></span>
                <div className="candle-body"></div>
            </div>

            <div className="candle candle-right">
                <span className="flame"></span>
                <div className="candle-body"></div>
            </div>

            {/* Floating particles */}
            {/* <span className="particle particle-1"></span>
            <span className="particle particle-2"></span>
            <span className="particle particle-3"></span>
            <span className="particle particle-4"></span>
            <span className="particle particle-5"></span> */}
        </div>
    );
}

export default InvitationCover;