import React from 'react';

function footer(){
    return(
        <section className="footer-cover">
            <div className="footer-section">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
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
                        <div className="row">
                            <div className="col-md-6">
                                Hello
                            </div>
                            <div className="col-md-6">
                                There
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default footer;