import React from "react";

function hero(){
    return(
        <section className="hero-section">
            <div className="row">
                {/* Main tagline, subtext & Hero image section */}
                <div className="col-md-6 hero-text-block">
                    <div className="com-tagline">
                        <h2>
                            Experts<br/>
                            in digital<br/>
                            know-how
                        </h2>
                        <p>Built by <a href="#">Deep Patel</a>, and referenced by <a href="#">Dribble</a></p>
                    </div>
                </div>

                <div className="col-md-6 hero-banner-block">
                    <div className="hero-image">
                        <img src="./images/hero.png" alt="Hero Illustration"/>
                    </div>
                </div>
            </div>

            {/* Search bar section */}
            <div className="search-bar row">
                <div className="job-title col-md-5 d-flex align-items-center">
                    <img src="https://img.icons8.com/ios/15/000000/search--v1.png" alt="search icon"/>
                    <p>Job title or a keyword</p>
                </div>
                <div className="job-location col-md-5">
                    <div className="location d-flex align-items-center">
                        <img src="https://img.icons8.com/material/20/000000/worldwide-location--v1.png"/>
                        <p>London, ON</p>
                    </div>
                    <div className="arrow">
                        &#8249;
                    </div>
                </div>
                <div className="search-button col-md-2 d-flex justify-content-center">
                    <button className="btn">Search</button>
                </div>
            </div>
        </section>
    );
}
export default hero;