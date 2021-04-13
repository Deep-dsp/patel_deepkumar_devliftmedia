import React from "react";

function clientthumb(){
    return(
        <section className="client-section">
            <div className="row d-flex align-items-center">
                
                <div className="client-text col-sm-12 col-lg-3 d-flex justify-content-center align-items-center">
                    <p>Companies We've Helped Build</p>
                </div>
                <div className="client-thumbnail col-sm-12 col-lg-9">
                    <div className="row thumb-row">
                        <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
                            <img src="./images/1.png" alt="esa logo"/>
                        </div>
                        <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
                            <img src="./images/2.png" alt="vmcare logo"/>
                        </div>
                        <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
                            <img src="./images/3.png" alt="google logo"/>
                        </div>
                        <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
                            <img src="./images/4.png" alt="amazon logo"/>
                        </div>
                        <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
                            <img src="./images/5.png" alt="graphisoft logo"/>
                        </div>
                        <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
                            <img src="./images/6.png" alt="Irex logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default clientthumb;