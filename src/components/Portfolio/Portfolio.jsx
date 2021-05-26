import React from 'react';
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container container-portfolio">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2>Gallery</h2>
                        <hr />
                    </div>
                </div>
                <div className="row" id="img-port">
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/1.jpeg" className="img" width = "350px" height="300px" alt="img1" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/2.png" className="img" width = "350px" height="300px" alt="img2" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/3.png" className="img" width = "350px" height="300px" alt="img3" />
                        </a>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/4.jpg" className="img" width = "350px" height="300px" alt="img4" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/5.jpg" className="img" width = "350px" height="300px" alt="img5" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/6.jpg" className="img" width = "350px" height="300px" alt="img6" />
                        </a>
                    </div>
                </div><br />
                <div className="row">
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/7.jpg" className="img" width = "350px" height="300px" alt="img4" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/8.jpg" className="img" width = "350px" height="300px" alt="img5" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#img-port"><img src="image/9.jpg" className="img" width = "350px" height="300px" alt="img6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio