import React from 'react';

function footer(){
    return(
        <section className="footer-cover">
            <div className="footer-section">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center text-center">
                        <p>You're now seeing jobs from Denmark.<br/>The Hub is also available in:</p>
                    </div>
                    <div className="col-md-12">
                        <ul className="first-link-block">
                            <li><a>Ireland</a></li>
                            <li><a>Finland</a></li>
                            <li><a>Sweden</a></li>
                            <li><a>Norway</a></li>
                        </ul>
                    </div>
                    <div className="footer-link col-md-12 container-fluid bg-dark">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-3">
                                D-TECH
                            </div>
                            <div className="col-md-9">
                                <ul>
                                    <li className="nav-item"><a>About</a></li>
                                    <li className="nav-item"><a>Privacy</a></li>
                                    <li className="nav-item"><a>Partners</a></li>
                                    <li className="nav-item"><a>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default footer;