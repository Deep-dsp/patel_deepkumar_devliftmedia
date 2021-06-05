import React from 'react';

function navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">D-TECH</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav nav-first-block">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Find jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Browse startups</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">For startups</a>
                        </li>
                        <li>
                            <div className="hor-line"></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign in</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default navbar;