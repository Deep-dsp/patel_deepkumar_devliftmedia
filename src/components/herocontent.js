import React from "react";

function hero(){
    return(
        <section className="hero-section">
            <div className="row">
                <div className="col-md-6">
                    <div className="com-tagline">
                        <h2>
                            experts<br/> 
                            in digital<br/>
                            know-how
                        </h2>
                    </div>
                    <div className="subtext">
                        Built by <a href="#">Deep Patel</a>, and referenced by <a href="#">Dribble</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hero-image">
                        <img src="./images/hero.png" alt="Hero Illustration"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default hero;