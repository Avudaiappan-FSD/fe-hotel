
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
import room14 from "../assets/room images/images (14).jpeg";
import room15 from "../assets/room images/images (15).jpeg";
import room16 from "../assets/room images/images (16).jpeg";
import room17 from "../assets/room images/images (17).jpeg";
import room18 from "../assets/room images/images (18).jpeg";
import room19 from "../assets/room images/images (19).jpeg";
import room20 from "../assets/room images/images.jpeg";
import { useRef } from "react";


const roomImages = {
    101: room1,
    102: room2,
    103: room3,
    104: room4,
    105: room5,
    106: room7,
    107: room8,
    108: room9,
    109: room10,
    110: room11,
    111: room12,
    112: room13,
    113: room14,
    114: room15,
    115: room16,
    116: room17,
    117: room18,
    118: room19,
    119: room20,
};

const Home = () => {
    const roomsRef = useRef(null);
    const roomImages = [
        room1, room2, room3, room4, room5, room7,
        room8, room9, room10, room11, room12, room13, room14,
        room15, room16, room17, room18, room19, room20
    ]
    const slideRooms = (direction) => {
        if (roomsRef.current) {
            roomsRef.current?.scrollBy({
                left: direction * roomsRef.current.clientWidth * 0.8, behaviour: "smooth",
            });
        }
    }
    return (
        <div className="hotel-home">

            {/* Navigation Bar */}
            <nav className="home-navbar">
                <div className="home-logo">
                    <span className="logo-icon">✦</span>
                    <span>
                        APPLE<span className="logo-highlight"> TREE</span>
                        <small>HOTEL & RESORT</small>
                    </span>
                </div>



                <div className="home-nav-links">
                    <a href="#experience">Experience</a>
                    <a href="#about">About Us</a>
                </div>

            </nav>

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

            {/* Footer */}
            <footer className="home-footer">
                <p>Comfort in every moment. Memories in every stay.</p>
                <span>© {new Date().getFullYear()} GrandStay Hotel</span>
            </footer>

            <section className="home-rooms">
                <div className="home-rooms-header">
                    <h2>Explore Our Rooms</h2>

                    <div className="room-arrows">
                        <button
                            type="button"
                            onClick={() => slideRooms(-1)}
                            aria-label="Previous rooms"
                        >
                            &#8592;
                        </button>
                    </div>
                </div>

                <div className="home-rooms-slider" ref={roomsRef}>
                    {roomImages.map((image, index) => (
                        <div className="home-room-card" key={index}>
                            <img
                                src={image}
                                alt={`Hotel room ${index + 1}`}
                                loading="lazy"
                                className="w-10 h-10"
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => slideRooms(1)}
                        aria-label="Next rooms"
                    >
                        &#8594;
                    </button>
                </div>

            </section>

        </div>
    );
};

export default Home;