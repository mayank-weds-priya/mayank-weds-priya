import WeddingCard from "./WeddingCard";
import Journey from "./Journey";
import WeddingEvents from "./WeddingEvents";
import FamilyCircle from "./FamilyCircle";
import Directions from "./Directions";
import Blessings from "./Blessings";
import Footer from "./Footer";

function MainInvitation({ type }) {
    return (
        <div className="main-invitation">

            <WeddingCard />

            <div id="journey">
                <Journey />
            </div>

            <div id="events">
                <WeddingEvents />
            </div>

            <div id="family">
                <FamilyCircle />
            </div>

            <div id="directions">
                <Directions type={type} />
            </div>

            {/* <div id="blessings">
                <Blessings />
            </div> */}

            <Footer />

        </div>
    );
}

export default MainInvitation;