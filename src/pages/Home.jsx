import {useRef} from "react";
import { Link } from "react-router-dom";

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


const rooms = [
    { image: room1, number: "01" },
    { image: room2, number: "02" },
    { image: room3, number: "03" },
    { image: room4, number: "04" },
    { image: room5, number: "05" },
    { image: room7, number: "06" },
    { image: room8, number: "07" },
    { image: room9, number: "08" },
    { image: room10, number: "09" },
    { image: room11, number: "10" },
    { image: room12, number: "11" },
    { image: room13, number: "12" },
    { image: room14, number: "13" },
    { image: room15, number: "14" },
    { image: room16, number: "15" },
    { image: room17, number: "16" },
    { image: room18, number: "17" },
    { image: room19, number: "18" },
    { image: room20, number: "19" },
];

const Home = () => {

    const roomsRef = useRef(null);

    const slideRooms = (direction) => {
        if (roomsRef.current) {
            roomsRef.current.scrollBy({
                left: direction * 340,
                behavior: "smooth",
            });
        }
    };

    return (
        <main className="hotel-home">

            {/* HERO SECTION */}

            <section
                className="luxury-hero"
                style={{
                    backgroundImage: `url(${room3})`
                }}
            >

                <div className="luxury-hero-overlay"></div>

                <div className="luxury-hero-content">

                    <div className="luxury-eyebrow">
                        <span></span>
                        WELCOME TO APPLE TREE
                        <span></span>
                    </div>

                    <h1>
                        Experience
                        <br />
                        <em>Luxury Living.</em>
                    </h1>

                    <p className="luxury-hero-description">
                        Discover a beautiful escape where comfort meets
                        elegance. Experience exceptional hospitality and
                        create memories that last forever.
                    </p>

                    <div className="luxury-hero-buttons">

                        <Link to="/roomlist" className="luxury-primary-btn">
                            Explore Our Rooms
                            <span>↗</span>
                        </Link>

                        <a href="#about" className="luxury-outline-btn">
                            Discover Our Story
                        </a>

                    </div>

                    <div className="luxury-hero-bottom">

                        <div className="luxury-rating">
                            <span>★★★★★</span>
                            <div>
                                <strong>A Stay Beyond Expectations</strong>
                                <small>Comfort · Elegance · Hospitality</small>
                            </div>
                        </div>

                        <div className="luxury-scroll">
                            SCROLL TO EXPLORE
                            <span>↓</span>
                        </div>

                    </div>

                </div>

                <div className="hero-vertical-text">
                    APPLE TREE HOTEL & RESORT
                </div>

            </section>


            {/* INTRODUCTION SECTION */}

            <section className="luxury-intro" id="about">

                <div className="intro-left">

                    <span className="luxury-section-label">
                        THE ART OF HOSPITALITY
                    </span>

                    <h2>
                        Not Just a Stay.
                        <br />
                        <em>A Beautiful Experience.</em>
                    </h2>

                </div>

                <div className="intro-right">

                    <p>
                        Welcome to Apple Tree Hotel & Resort, where every
                        moment is designed around your comfort.

                        From thoughtfully designed accommodation to
                        welcoming hospitality, discover a place where
                        relaxation comes naturally.
                    </p>

                    <Link to="/roomlist" className="text-discover-link">
                        Discover Our Rooms <span>↗</span>
                    </Link>

                </div>

            </section>


            {/* ROOMS SHOWCASE */}

            <section className="luxury-rooms" id="rooms">

                <div className="rooms-heading">

                    <div>
                        <span className="luxury-section-label">
                            YOUR PRIVATE RETREAT
                        </span>

                        <h2>
                            Discover Our
                            <em> Rooms.</em>
                        </h2>

                        <p>
                            Thoughtfully designed spaces for your perfect stay.
                        </p>
                    </div>

                    <div className="room-slider-controls">

                        <button
                            type="button"
                            onClick={() => slideRooms(-1)}
                            aria-label="Previous rooms"
                        >
                            ←
                        </button>

                        <button
                            type="button"
                            onClick={() => slideRooms(1)}
                            aria-label="Next rooms"
                        >
                            →
                        </button>

                    </div>

                </div>


                <div className="rooms-slider" ref={roomsRef}>

                    {rooms.map((room) => (

                        <Link
                            to="/roomlist"
                            className="luxury-room-card"
                            key={room.number}
                        >

                            <div className="luxury-room-image">

                                <img
                                    src={room.image}
                                    alt={`Apple Tree Hotel room inspiration ${room.number}`}
                                    loading="lazy"
                                />

                                <span className="room-image-number">
                                    {room.number}
                                </span>

                                <div className="room-image-overlay">
                                    <span>EXPLORE ROOMS ↗</span>
                                </div>

                            </div>

                            <div className="luxury-room-info">

                                <div>
                                    <span>APPLE TREE COLLECTION</span>
                                    <h3>Discover Your Stay</h3>
                                </div>

                                <div className="room-card-arrow">
                                    ↗
                                </div>

                            </div>

                        </Link>

                    ))}

                </div>


                <div className="rooms-bottom">

                    <span>
                        FIND YOUR PERFECT SPACE
                    </span>

                    <Link to="/roomlist">
                        VIEW ALL ROOMS ↗
                    </Link>

                </div>

            </section>


            {/* EXPERIENCE SECTION */}

            <section className="luxury-experience">

                <div className="experience-heading">

                    <span className="luxury-section-label">
                        WHY APPLE TREE
                    </span>

                    <h2>
                        Every Detail.
                        <br />
                        <em>Thoughtfully Designed.</em>
                    </h2>

                    <p>
                        Because a memorable stay is created through
                        comfort, care and attention to every detail.
                    </p>

                </div>


                <div className="experience-grid">

                    <div className="experience-card">

                        <span className="experience-number">01</span>
                        <div className="experience-icon">⌂</div>

                        <h3>Elegant Accommodation</h3>

                        <p>
                            Beautifully presented rooms designed to
                            make every stay comfortable and relaxing.
                        </p>

                    </div>


                    <div className="experience-card">

                        <span className="experience-number">02</span>
                        <div className="experience-icon">✧</div>

                        <h3>Exceptional Comfort</h3>

                        <p>
                            Enjoy thoughtfully arranged spaces
                            that help you relax and feel at home.
                        </p>

                    </div>


                    <div className="experience-card">

                        <span className="experience-number">03</span>
                        <div className="experience-icon">♡</div>

                        <h3>Warm Hospitality</h3>

                        <p>
                            A welcoming experience with attention
                            to the little things that matter.
                        </p>

                    </div>


                    <div className="experience-card">

                        <span className="experience-number">04</span>
                        <div className="experience-icon">◇</div>

                        <h3>Easy Reservations</h3>

                        <p>
                            Explore available rooms and conveniently
                            reserve your preferred accommodation online.
                        </p>

                    </div>


                    <div className="experience-card">

                        <span className="experience-number">05</span>
                        <div className="experience-icon">◎</div>

                        <h3>Secure Payments</h3>

                        <p>
                            Complete your room reservation through
                            our integrated online payment experience.
                        </p>

                    </div>


                    <div className="experience-card">

                        <span className="experience-number">06</span>
                        <div className="experience-icon">✦</div>

                        <h3>Memorable Moments</h3>

                        <p>
                            Make every visit special with a stay
                            created around comfort and convenience.
                        </p>

                    </div>

                </div>

            </section>


            {/* LUXURY BOOKING BANNER */}

            <section className="luxury-booking">

                <div className="booking-overlay"></div>

                <div className="booking-content">

                    <span className="luxury-section-label">
                        YOUR NEXT ESCAPE AWAITS
                    </span>

                    <h2>
                        Make Room for
                        <br />
                        <em>Beautiful Memories.</em>
                    </h2>

                    <p>
                        Your perfect stay is just a reservation away.
                        Discover comfort, elegance and warm hospitality
                        at Apple Tree Hotel & Resort.
                    </p>

                    <Link to="/roomlist" className="luxury-primary-btn">
                        Book Your Stay
                        <span>↗</span>
                    </Link>

                </div>

            </section>


            {/* FOOTER */}

            <footer className="luxury-footer">

                <div className="footer-main">

                    <div className="footer-brand">

                        <h2>
                            <span>✧</span> APPLE TREE
                        </h2>

                        <small>HOTEL & RESORT</small>

                        <p>
                            A place where comfort meets elegance.
                            Experience thoughtful hospitality and
                            make every stay memorable.
                        </p>

                    </div>


                    <div className="footer-column">

                        <h3>EXPLORE</h3>

                        <Link to="/">Home</Link>
                        <Link to="/roomlist">Explore Rooms</Link>
                        <Link to="/login">My Account</Link>
                        <Link to="/register">Create Account</Link>

                    </div>


                    <div className="footer-column">

                        <h3>OUR EXPERIENCE</h3>

                        <a href="#about">About Apple Tree</a>
                        <a href="#rooms">Our Rooms</a>
                        <a href="#experience">Our Services</a>
                        <Link to="/roomlist">Reservations</Link>

                    </div>


                    <div className="footer-column footer-contact">

                        <h3>GET IN TOUCH</h3>

                        <p>We look forward to welcoming you.</p>

                        <a href="mailto:info@appletreehotel.com">
                            Contact Us ↗
                        </a>

                        <div className="footer-socials">
                            <span>INSTAGRAM</span>
                            <span>FACEBOOK</span>
                        </div>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © {new Date().getFullYear()} Apple Tree Hotel & Resort.
                        All Rights Reserved.
                    </span>

                    <span>
                        COMFORT · ELEGANCE · HOSPITALITY
                    </span>

                </div>

            </footer>

        </main>
    );
};

export default Home;