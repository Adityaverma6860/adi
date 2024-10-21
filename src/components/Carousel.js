import React from 'react';

import './css/home.css';



import girlsmesurehips from './img/home/girlsmesurehips.jpg'



export default function Carousel() {
    return (

        <div className="Carousel-container">
             <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://avataarv2content.s3.ap-south-1.amazonaws.com/compressed-images/Banners+1/tinywow_D_TREATMENT%2BINCH%2BLOSS%2BF%2Bcopy_45625143.png" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="https://avataarv2content.s3.ap-south-1.amazonaws.com/compressed-images/Banners+1/tinywow_D_6%2BLHR%2BF%2Bcopy_45625328.png" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="https://avataarv2content.s3.ap-south-1.amazonaws.com/images/New+images+2024/FACE+%26+HAIR+PRP+invasive+female+%2C.png" className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
       
    );
}
