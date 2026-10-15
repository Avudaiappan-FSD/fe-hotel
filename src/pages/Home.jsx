import home from "../assets/images/home.jpeg";


const Home = () => {
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

        </div>
    );
};

export default Home;