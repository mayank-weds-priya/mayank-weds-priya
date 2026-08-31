import { useState } from "react";

function Blessings() {
    const [formData, setFormData] = useState({
        name: "",
        message: ""
    });

    const [wishes, setWishes] = useState([
        {
            name: "Sandeep",
            message:
                "Wishing you both a lifetime filled with happiness and love."
        },
        {
            name: "Anand Priya",
            message:
                "May your journey together be filled with joy and laughter."
        }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.message.trim()
        ) {
            return;
        }

        setWishes((prev) => [
            {
                name: formData.name,
                message: formData.message
            },
            ...prev
        ]);

        setFormData({
            name: "",
            message: ""
        });
    };

    return (
        <section className="invitation-section blessings-section">
            <div className="section-container">

                <div className="section-header">
                    <span className="section-eyebrow">
                        SHARE THE LOVE
                    </span>

                    <h2>WISHES & BLESSINGS</h2>

                    <p>
                        Your kind thoughts and warm wishes
                        mean the world to us.
                    </p>
                </div>

                <form
                    className="blessing-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label>
                            YOUR NAME
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rahul Kumar"
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            YOUR MESSAGE
                        </label>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Wishing you both a lifetime of happiness..."
                            rows="4"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="send-blessing-btn"
                    >
                        SEND BLESSING
                    </button>

                </form>

                <div className="wishes-list">

                    {wishes.map((wish, index) => (
                        <div
                            className="wish-card"
                            key={index}
                        >
                            <h4>
                                {wish.name}
                            </h4>

                            <p>
                                {wish.message}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Blessings;