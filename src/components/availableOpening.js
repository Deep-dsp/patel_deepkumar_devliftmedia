import { render } from '@testing-library/react';
import React from 'react';
import Jobpost from './jobpostComponent.js';

function jobopening(){

    return(
        <section className="job-cover">
            <div className="job-section">
                <div className="explore-title">
                    <p>Jobs</p>
                    <span>Find a job you love. <a href="#">Set career interests.</a></span>
                </div>
                
                <div className="explore-category row currentOpen">
                    {/* First block  - We can also make sub component for each box*/}
                    <Jobpost/>
                    <Jobpost/>
                    <Jobpost/>
                    <Jobpost/>
                    <Jobpost/>
                    <Jobpost/>

                </div>
                {/* Button */}
                <div className="job-button d-flex justify-content-center" 
                    style={{
                        backgroundImage: `url(${'/images/category.png'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '250px',
                        backgroundPositionX: '50%',
                        backgroundPositionY: '-60px'
                  }}
                >
                    <button className="btn">Show all jobs</button>
                </div>
            </div>
        </section>
    );
}

export default jobopening;