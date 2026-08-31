import { useEffect, useRef, useState } from "react";

function WeddingMusic({ shouldPlay }) {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!shouldPlay || !audioRef.current) {
            return;
        }

        const audio = audioRef.current;

        audio.volume = 0.55;

        audio
            .play()
            .then(() => {
                setIsPlaying(true);
            })
            .catch(() => {
                // Browser may block autoplay.
                // User can start it using the music button.
                setIsPlaying(false);
            });
    }, [shouldPlay]);

    const toggleMusic = async () => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        if (audio.paused) {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (error) {
                console.error(
                    "Unable to play wedding music:",
                    error
                );
            }
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/music/wedding.mp3"
                loop
                preload="auto"
            />

            <button
                type="button"
                className="music-control"
                onClick={toggleMusic}
                aria-label={
                    isPlaying
                        ? "Pause wedding music"
                        : "Play wedding music"
                }
            >
                {isPlaying ? "♫" : "🔇"}
            </button>
        </>
    );
}

export default WeddingMusic;