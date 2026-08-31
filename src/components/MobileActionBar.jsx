import { useEffect, useState } from "react";

function MobileActionBar() {
    const [modalType, setModalType] = useState(null);

    const closeModal = () => {
        setModalType(null);
    };

    // Prevent background scrolling while modal is open
    useEffect(() => {
        if (modalType) {
            document.body.classList.add("mobile-modal-open");
        } else {
            document.body.classList.remove("mobile-modal-open");
        }

        return () => {
            document.body.classList.remove("mobile-modal-open");
        };
    }, [modalType]);

    // Close modal when pressing Escape
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);

    return (
        <>
            {/* =====================================
                MOBILE STICKY ACTION BAR
            ====================================== */}

            <div className="mobile-action-bar">

                <button
                    type="button"
                    className="mobile-action-btn call-btn"
                    onClick={() => setModalType("call")}
                >
                    <span className="action-icon">📞</span>
                    <span>CALL</span>
                </button>


                <button
                    type="button"
                    className="mobile-action-btn whatsapp-btn"
                    onClick={() => setModalType("whatsapp")}
                >
                    <span className="action-icon">💬</span>
                    <span>WHATSAPP</span>
                </button>

            </div>


            {/* =====================================
                MODAL
            ====================================== */}

            {modalType && (
                <div
                    className="mobile-contact-modal"
                    onClick={closeModal}
                >

                    <div
                        className="mobile-contact-sheet"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* Handle */}
                        <div className="sheet-handle"></div>


                        <h3>
                            {modalType === "call"
                                ? "Call"
                                : "WhatsApp"}
                        </h3>

                        <p className="sheet-subtitle">
                            Choose who you'd like to reach
                        </p>


                        <div className="contact-options">

                            {/* Bride */}
                            <a
                                href={
                                    modalType === "call"
                                        ? "tel:+918188881052"
                                        : "https://wa.me/918188881052"
                                }
                                className="contact-option"
                            >
                                <span className="contact-name">
                                    Mayank's Side
                                </span>

                                <span className="contact-number">
                                    +91 8188 881052
                                </span>
                            </a>


                            {/* Groom */}
                            <a
                                href={
                                    modalType === "call"
                                        ? "tel:+918373971367"
                                        : "https://wa.me/918373971367"
                                }
                                className="contact-option"
                            >
                                <span className="contact-name">
                                    Priya's Side
                                </span>

                                <span className="contact-number">
                                    +91 83739 71367
                                </span>
                            </a>

                        </div>


                        <button
                            type="button"
                            className="sheet-cancel"
                            onClick={closeModal}
                        >
                            CANCEL
                        </button>

                    </div>

                </div>
            )}
        </>
    );
}

export default MobileActionBar;