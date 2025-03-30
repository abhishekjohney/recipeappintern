import React from "react";

const Home = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide pt-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img.avif" className="d-block w-100" height="400px" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="./img2.avif" className="d-block w-100" height="400px" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="./img3.avif" className="d-block w-100" height="400px" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
