import React from 'react';

function jobboard(){
    return(
        <section className="service-cover"
                style={{
                    backgroundImage: `url(${'/images/category.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: '450px',
                    backgroundPositionX: '-150px',
                    backgroundSize: 'contain'
                }}
        >
            <div className="service-section">
                <div className="explore-title">
                    <p>Explore <br/>by Category</p>
                </div>
                <div className="explore-category row">
                    <div className="col-md-2">
                        <div className="card"
                                style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img className="card-title" src="https://img.icons8.com/fluent/50/000000/rebalance-portfolio.png" alt="Business Development"/>
                                <p className="card-text">Business<br/> Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card"
                            style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img src="https://img.icons8.com/ultraviolet/50/000000/customer-support.png" alt="Customer support"/>
                                <p className="card-text">Customer<br/> Service</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card"
                            style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img src="https://img.icons8.com/cute-clipart/50/000000/design.png" alt="Design Icon"/>
                                <p className="card-text">Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card"
                            style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img src="https://img.icons8.com/cotton/50/000000/developer.png" alt="Development Icon"/>
                                <p className="card-text">Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card"
                            style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img src="https://img.icons8.com/plasticine/50/000000/fund-accounting.png" alt="Finance Icon"/>
                                <p className="card-text">Finance</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 remove-block">
                        <div className="card block-visible"></div>
                    </div>
                    <div className="col-md-2">
                        <div className="card"
                            style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img src="https://img.icons8.com/cotton/50/000000/conference-background-selected.png" alt="HR Icon"/>
                                <p className="card-text">Human<br/> Resource</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card"
                            style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img src="https://img.icons8.com/cotton/50/000000/define-location--v2.png" alt="Mearketing and communication Icon"/>
                                <p className="card-text">Marketing & communication</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card"
                            style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img src="https://img.icons8.com/dusk/50/000000/folder-tree.png" alt="Project Management Icon"/>
                                <p className="card-text">Project<br/> management</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card"
                            style={{
                                    backgroundImage: `url(${'/images/small.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200px',
                                    backgroundPositionX: '130px',
                                    backgroundPositionY: '-70px'
                            }}
                        >
                            <div className="card-body mt-4">
                                <img src="https://img.icons8.com/nolan/50/speech-bubble-with-dots.png" alt="Sales Icon"/>
                                <p className="card-text">Sales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    );
}

export default jobboard;