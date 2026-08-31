import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import InvitationCover from "./components/InvitationCover";
import MainInvitation from "./components/MainInvitation";
import FloatingPetals from "./components/FloatingPetals";
import WeddingMusic from "./components/WeddingMusic";

import "./styles/global.css";
import "./styles/cover.css";
import "./styles/invitation.css";
import "./styles/mobile-actions.css";
import MainInvitationReception from "./components/MainInvitationReception";
import MobileActionBar from "./components/MobileActionBar";


function WeddingPage() {

    const [isOpening, setIsOpening] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const handleOpenInvitation = () => {

        /*
         * IMPORTANT:
         *
         * Start the audio here while we still
         * have the user's click interaction.
         *
         * The WeddingMusic component receives
         * shouldPlay=true.
         */

        setIsOpening(true);

        /*
         * Curtain animation is 1.8 seconds.
         * We reveal the main page after that.
         */
        setTimeout(() => {

            setIsOpened(true);

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto"
            });

        }, 1400);
    };

    return (
        <div className="app">

            {/* Petals are always floating */}
            <FloatingPetals />

            {/* Music */}
            <WeddingMusic
                shouldPlay={isOpening}
            />

            {/* Main Wedding Details */}

            <div
                className={`main-invitation-wrapper ${isOpened
                        ? "visible"
                        : ""
                    }`}
            >
                <MainInvitation type={"W"}/>
                <MobileActionBar />
            </div>


            {/* Curtain / Invitation Cover */}

            {!isOpened && (
                <InvitationCover
                    isOpening={isOpening}
                    onOpen={handleOpenInvitation}
                />
            )}

        </div>
    );
}

function ReceptionPage() {

    const [isOpening, setIsOpening] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const handleOpenInvitation = () => {

        /*
         * IMPORTANT:
         *
         * Start the audio here while we still
         * have the user's click interaction.
         *
         * The WeddingMusic component receives
         * shouldPlay=true.
         */

        setIsOpening(true);

        /*
         * Curtain animation is 1.8 seconds.
         * We reveal the main page after that.
         */
        setTimeout(() => {

            setIsOpened(true);

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto"
            });

        }, 1400);
    };

    return (
        <div className="app">

            {/* Petals are always floating */}
            <FloatingPetals />

            {/* Music */}
            <WeddingMusic
                shouldPlay={isOpening}
            />

            {/* Main Wedding Details */}

            <div
                className={`main-invitation-wrapper ${isOpened
                        ? "visible"
                        : ""
                    }`}
            >
                <MainInvitationReception type={"WR"}/>
                <MobileActionBar />
            </div>


            {/* Curtain / Invitation Cover */}

            {!isOpened && (
                <InvitationCover
                    isOpening={isOpening}
                    onOpen={handleOpenInvitation}
                />
            )}

        </div>
    );
}


function App() {

    return (
        <BrowserRouter>

            <Routes>

                {/* Wedding Only */}
                <Route
                    path="/"
                    type={"R"}
                    element={<WeddingPage />}
                />

                {/* Wedding + Reception */}
                <Route
                    path="/wedding-reception"
                    type={"WR"}
                    element={<ReceptionPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}


export default App;