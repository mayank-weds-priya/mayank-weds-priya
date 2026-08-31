import WeddingCard from "./WeddingCard";
import Journey from "./Journey";
import WeddingEvents from "./WeddingEvents";
import FamilyCircle from "./FamilyCircle";
import Directions from "./Directions";
import Blessings from "./Blessings";
import Footer from "./Footer";
import WeddingEventsReception from "./WeddingEventsReception";

function MainInvitationReception({ type }) {
    return (
        <div className="main-invitation">

            <WeddingCard />

            <div id="journey">
                <Journey />
            </div>

            <div id="events">
                <WeddingEventsReception />
            </div>

            <div id="family">
                <FamilyCircle />
            </div>

            <div id="directions">
                <Directions type={type}/>
            </div>

            {/* <div id="blessings">
                <Blessings />
            </div> */}

            <Footer />

        </div>
    );
}

export default MainInvitationReception;