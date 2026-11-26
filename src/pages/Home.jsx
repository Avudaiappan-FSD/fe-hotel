import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import room1 from "../assets/room images/images (1).jpeg";
import room2 from "../assets/room images/images (2).jpeg";
import room3 from "../assets/room images/images (3).jpeg";
import room4 from "../assets/room images/images (4).jpeg";
import room5 from "../assets/room images/images (5).jpeg";
import room7 from "../assets/room images/images (7).jpg";
import room8 from "../assets/room images/images (8).jpeg";
import room9 from "../assets/room images/images (9).jpeg";
import room10 from "../assets/room images/images (10).jpeg";
import room11 from "../assets/room images/images (11).jpeg";
import room12 from "../assets/room images/images (12).jpeg";
import room13 from "../assets/room images/images (13).jpeg";

const Home = () => {
    const navigate = useNavigate();
    const roomImages = [
        {
            id: 1,
            image: room1,
            title: "Deluxe Room",
            description: "Experience premium comfort"
        },
        {
            id: 2,
            image: room2,
            title: "Double Room",
            description: "Enjoy Elegance and comfort"
        },
        {
            id: 3,
            image: room3,
            title: "Suite Room",
            description: "Indulge in luxury and style"
        },
        {
            id: 4,
            image: room4,
            title: "Family Room",
            description: "Perfect for your loved ones"
        },
        {
            id: 5,
            image: room5,
            title: "Single Room",
            description: "Ideal for solo travelers"
        },
        {
            id: 6,
            image: room7,
            title: "Executive Room",
            description: "Experience unparalleled comfort and service"
        },
        {
            id: 7,
            image: room8,
            title: "Presidential Suite",
            description: "Experience the pinnacle of luxury and sophistication"
        },
        {
            id: 8,
            image: room9,
            title: "Honeymoon Suite",
            description: "A romantic retreat for couples"
        },
        {
            id: 9,
            image: room10,
            title: "Business Suite",
            description: "Perfect for professional travelers"
        },
        {
            id: 10,
            image: room11,
            title: "Standard Room",
            description: "Comfortable and well-appointed"
        },
        {
            id: 11,
            image: room12,
            title: "Accessible Room",
            description: "Thoughtfully designed for accessibility"
        },
        {
            id: 12,
            image: room13,
            title: "Ocean View Room",
            description: "Breathtaking views of the ocean"
        }


    ];
    const [currentRoom, setcurrentRoom] = useState(0);
    const nextRoom = () => {
        setcurrentRoom((prev) => (prev + 1) % roomImages.length);
    };
    const prevRoom = () => {
        setcurrentRoom((prev) => (prev - 1 + roomImages.length) % roomImages.length);
    };
    return (
        <div className="hotel-home">

            {/* Hero Section */}
            <section
                className="home-hero"
            // style={{ backgroundImage: `url(${home})` }}
            >
                <div className="hero-dark-overlay"></div>

                <div className="hero-inner">

                    <div className="hero-label">
                        <span></span>
                        WELCOME TO APPLE TREE
                        <span></span>
                    </div>

                    <h1>
                        Your Escape.
                        <br />
                        <span>Your Experience.</span>
                    </h1>

                    <p className="hero-description">
                        Discover a world of comfort, elegance and exceptional
                        hospitality. Your perfect stay begins here.
                    </p>

                    <div className="hero-actions">


                        <a href="#experience" className="discover-btn">
                            Discover More <span>↗</span>
                        </a>
                    </div>

                    <div className="hero-rating">
                        <div className="rating-stars">★★★★★</div>
                        <div>
                            <strong>Exceptional Hospitality</strong>
                            <p>Every stay, a special experience</p>
                        </div>
                    </div>
                </div>

                <div className="hero-side-text">
                    COMFORT · LUXURY · EXPERIENCE
                </div>

                <div className="hero-bottom">
                    <span>YOUR JOURNEY TO COMFORT STARTS HERE</span>
                    <span>01 — 03</span>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="welcome-section" id="about">
                <div className="welcome-heading">
                    <span className="section-label">THE GRANDSTAY EXPERIENCE</span>

                    <h2>
                        More Than a Stay.
                        <br />
                        <span>A Feeling of Belonging.</span>
                    </h2>
                </div>

                <p className="welcome-description">
                    From thoughtfully designed rooms to warm hospitality,
                    every detail is created to make your visit memorable.
                    Relax, recharge and make yourself at home.
                </p>
            </section>

            {/* Features */}
            <section className="features-section" id="experience">

                <div className="feature-card">
                    <div className="feature-icon">⌂</div>
                    <span className="feature-number">01</span>
                    <h3>Elegant Rooms</h3>
                    <p>
                        Beautifully designed spaces created for relaxation
                        and peaceful stays.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">✧</div>
                    <span className="feature-number">02</span>
                    <h3>Premium Comfort</h3>
                    <p>
                        Enjoy thoughtful amenities and comfort throughout
                        your entire visit.
                    </p>

                </div>

                <div className="feature-card">
                    <div className="feature-icon">♡</div>
                    <span className="feature-number">03</span>
                    <h3>Warm Hospitality</h3>
                    <p>
                        Friendly service and attention to detail make
                        every guest feel welcome.
                    </p>
                    <a href="#about">Our philosophy ↗</a>
                </div>

            </section>

            {/* Final Booking Banner */}
            <section className="booking-banner">
                <div>
                    <span className="section-label">YOUR NEXT CHAPTER STARTS HERE</span>
                    <h2>Ready for a Memorable Stay?</h2>
                    <p>Find your room and make your next visit special.</p>
                </div>
            </section>
            {/* Room Image Carousel */}
            <section className="rooms-carousel-section">

                <div className="rooms-carousel-heading">
                    <div>
                        <span className="section-label">
                            DISCOVER YOUR PERFECT STAY
                        </span>

                        <h2>
                            Explore Our <span>Rooms</span>
                        </h2>

                        <p>
                            Find the perfect space for your next memorable stay.
                        </p>
                    </div>

                    <div className="room-navigation">
                        <button onClick={prevRoom} aria-label="Previous room">
                            <ArrowLeft size={22} />
                        </button>

                        <button onClick={nextRoom} aria-label="Next room">
                            <ArrowRight size={22} />
                        </button>
                    </div>
                </div>

                <div className="room-carousel">
                    {roomImages.map((room, index) => (
                        <div
                            className={`room-slide ${index === currentRoom ? "active" : ""
                                }`}
                            key={room.id}
                            style={{
                                transform: `translateX(-${currentRoom * 100}%)`
                            }}
                        >
                            <img src={room.image} alt={room.title} />

                            <div className="room-slide-content">
                                <span>APPLE TREE HOTEL</span>
                                <h3>{room.title}</h3>
                                <p>{room.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="room-carousel-indicators">
                    {roomImages.map((room, index) => (
                        <button
                            key={room.id}
                            className={currentRoom === index ? "active" : ""}
                            onClick={() => setcurrentRoom(index)}
                            aria-label={`Go to ${room.title}`}
                        />
                    ))}
                </div>

            </section>
            <div className="buttonhm">
                <button onClick={() => navigate("/register")}>Book Room</button>
            </div>
            {/* Footer */}
            <footer className="home-footer">
                <p>Comfort in every moment. Memories in every stay.</p>
                <span>© {new Date().getFullYear()} AppleTree Hotel</span>
            </footer>
        </div>
    );
};

export default Home;