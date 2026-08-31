const petals = [
    { left: "4%", top: "12%", size: 13, duration: 14, delay: 0 },
    { left: "11%", top: "72%", size: 10, duration: 17, delay: 3 },
    { left: "18%", top: "35%", size: 15, duration: 19, delay: 6 },
    { left: "27%", top: "82%", size: 9, duration: 15, delay: 2 },
    { left: "34%", top: "18%", size: 12, duration: 21, delay: 8 },
    { left: "42%", top: "62%", size: 14, duration: 18, delay: 4 },
    { left: "50%", top: "28%", size: 10, duration: 16, delay: 1 },
    { left: "58%", top: "78%", size: 15, duration: 20, delay: 7 },
    { left: "65%", top: "10%", size: 11, duration: 17, delay: 5 },
    { left: "72%", top: "48%", size: 13, duration: 22, delay: 9 },
    { left: "80%", top: "25%", size: 9, duration: 15, delay: 3 },
    { left: "87%", top: "68%", size: 14, duration: 19, delay: 6 },
    { left: "94%", top: "18%", size: 11, duration: 16, delay: 2 },
    { left: "7%", top: "48%", size: 8, duration: 23, delay: 10 },
    { left: "23%", top: "8%", size: 12, duration: 18, delay: 5 },
    { left: "38%", top: "90%", size: 10, duration: 21, delay: 4 },
    { left: "56%", top: "52%", size: 12, duration: 17, delay: 8 },
    { left: "76%", top: "88%", size: 9, duration: 20, delay: 1 },
];

function FloatingPetals() {
    return (
        <div className="floating-petals" aria-hidden="true">
            {petals.map((petal, index) => (
                <span
                    key={index}
                    className="floating-petal"
                    style={{
                        left: petal.left,
                        top: petal.top,
                        "--petal-size": `${petal.size}px`,
                        "--petal-duration": `${petal.duration}s`,
                        "--petal-delay": `${petal.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default FloatingPetals;