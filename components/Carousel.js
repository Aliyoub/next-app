import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
            <div className="carousel-item active">
            <div className="d-flex justify-content-center align-items-center">
                <img src="https://m.media-amazon.com/images/I/71n2eiYGmHL._AC_SL1500_.jpg"  height="500" alt="..."/>
            </div>
            <div className="carousel-caption d-none d-md-block carousel-content-container">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div className="carousel-item">
            <div className="d-flex justify-content-center align-items-center">
                <img src="https://m.media-amazon.com/images/I/51Tp8BrXykL._AC_SL1180_.jpg"  height="500" alt="..."/>
            </div>
            <div className="carousel-caption d-none d-md-block carousel-content-container">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div className="carousel-item">
            <div className="d-flex justify-content-center align-items-center">
                <img src="https://m.media-amazon.com/images/I/51hdIfB7OJS._AC_SL1500_.jpg"  height="500" alt="..."/>
            </div>
            <div className="carousel-caption d-none d-md-block carousel-content-container">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev control-next-previous" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon control-next-previous" aria-hidden="true"></span>
            <span className="visually-hidden control-next-previous">Previous</span>
        </button>
        <button className="carousel-control-next control-next-previous" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon control-next-previous" aria-hidden="true"></span>
            <span className="visually-hidden control-next-previous">Next</span>
        </button>
        </div>
    )
}
