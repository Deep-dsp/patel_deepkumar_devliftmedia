import React from "react";

function hero(){
    return(
        <section className="hero-section">
            <div className="row">
                <div className="col-md-6 hero-text-block">
                    <div className="com-tagline">
                        <h2>
                            Experts<br/>
                            in digital<br/>
                            know-how
                        </h2>
                        <p>Built by <a href="#">Deep Patel</a>, and referenced by <a href="#">Dribble</a></p>
                    </div>
                    {/* <div className="subtext">
                        Built by <a href="#">Deep Patel</a>, and referenced by <a href="#">Dribble</a>
                    </div> */}
                </div>
                <div className="col-md-6 hero-banner-block">
                    <div className="hero-image">
                        <img src="./images/hero.png" alt="Hero Illustration"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default hero;